<template>
    <!-- https://www.digitalocean.com/community/tutorials/how-to-handle-file-uploads-in-vue-2 -->
    <div class="container my-4">
        <div class="row">
            <div class="offset-0 offset-md-3 col-12 col-md-6">
                <h1>Update Profile</h1>
                <hr />
                <form name="profileForm" @submit.prevent="changeProfileImage" enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                    <label :for="uploadFieldName">Profile image</label>
                    <div class="dropbox">
                        <input
                            type="file"
                            multiple
                            :id="uploadFieldName"
                            :name="uploadFieldName"
                            :disabled="isSaving"
                            @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
                            accept="image/*"
                            class="input-file"
                        />
                        <p v-if="isInitial">
                            Drag your file(s) here to begin<br> or click to browse
                        </p>
                        <p v-if="isSaving">
                            Uploading {{ fileCount }} files...
                        </p>
                    </div>
                </form>

                <!--SUCCESS-->
                <div v-if="isSuccess">
                    <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
                    <p>
                        <a href="javascript:void(0)" @click="reset()">Upload again</a>
                    </p>
                    <ul class="list-unstyled">
                        <li v-for="item in uploadedFiles" :key="item.url">
                            <img :src="`${apiBaseUrl}/users/me/profilephoto/${item._id}`" class="img-responsive img-thumbnail" :alt="item.originalName">
                        </li>
                    </ul>
                </div>

                <!--FAILED-->
                <div v-if="isFailed">
                    <h2>Uploaded failed.</h2>
                    <p>
                        <a href="javascript:void(0)" @click="reset()">Try again</a>
                    </p>
                    <pre>{{ uploadError }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { required } from 'vuelidate/lib/validators'
    import config from '@/config';

    import { upload } from '../services/file-upload';

    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

    export default {
        name: 'Profile',
        data() {
            return {
                apiBaseUrl: config.apiBaseUrl,
                uploadedFiles: [],
                uploadError: null,
                currentStatus: null,
                uploadFieldName: 'profile',
                processing: false,
                form: {
                    profile: ''
                }
            };
        },
        validations: {
            form: {
                profile: {
                    required
                }
            }
        },
        computed: {
            isInitial() {
                return this.currentStatus === STATUS_INITIAL;
            },
            isSaving() {
                return this.currentStatus === STATUS_SAVING;
            },
            isSuccess() {
                return this.currentStatus === STATUS_SUCCESS;
            },
            isFailed() {
                return this.currentStatus === STATUS_FAILED;
            }
        },
        methods: {
            changeProfileImage() {
                this.$v.form.$touch();

                if( !this.$v.form.$invalid ) {
                    this.$store.dispatch( 'changeProfileImage', this.form )
                        .then( () => this.$router.push( { name: 'home' } ) )
                        .catch( error => {
                            Vue.$toast.open({
                                message: error.response.data.message,
                                duration: config.toastDuration,
                                type: 'error'
                            });
                        });
                } else {
                    console.log( 'Choose a profile image' );
                }
            },
            shouldAppendValidClass( field ) {
                return !field.$invalid && field.$model && field.$dirty;
            },
            shouldAppendErrorClass( field ) {
                return field.$error;
            },
            reset() {
                // reset form to initial state
                this.currentStatus = STATUS_INITIAL;
                this.uploadedFiles = [];
                this.uploadError = null;
            },
            save(formData) {
                // upload data to the server
                this.currentStatus = STATUS_SAVING;

                upload(formData)
                    .then(x => {
                        this.uploadedFiles = [].concat(x);
                        this.currentStatus = STATUS_SUCCESS;
                    })
                    .catch(err => {
                        this.uploadError = err.response;
                        this.currentStatus = STATUS_FAILED;
                    });
            },
            filesChange(fieldName, fileList) {
                // handle file changes
                const formData = new FormData();

                if (!fileList.length) return;

                // append the files to FormData
                Array
                    .from(Array(fileList.length).keys())
                    .map(x => {
                        formData.append(fieldName, fileList[x], fileList[x].name);
                    });

                // save it
                this.save(formData);
            }
        },
        mounted() {
            this.reset();
        }
    }
</script>

<style scoped>
.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>