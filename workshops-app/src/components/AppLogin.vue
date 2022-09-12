<template>
    <div class="container my-4">
        <div class="row">
            <div class="offset-0 offset-md-3 col-12 col-md-6">
                <h1>Login</h1>
                <hr />
                <form name="form" @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="john.doe@example.com"
                            autocomplete="off"
                            v-model="form.email"
                            @blur="$v.form.email.$touch()"
                            :class="{
                                'is-invalid': shouldAppendErrorClass($v.form.email),
                                'is-valid': shouldAppendValidClass($v.form.email)
                            }"
                        />
                        <!-- Dirty email : {{$v.form.email.$dirty}} -->
                    </div>
                    <div v-if="$v.form.email.$error">
                        <div v-if="!$v.form.email.required" class="text-danger">
                            <small>The email field is required</small>
                        </div>
                        <div v-if="!$v.form.email.email" class="text-danger">
                            <small>Invalid email address</small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            autocomplete="off"
                            class="form-control"
                            name="password"
                            id="password"
                            v-model="form.password"
                            @blur="$v.form.password.$touch()"
                            :class="{
                                'is-invalid': shouldAppendErrorClass($v.form.password),
                                'is-valid': shouldAppendValidClass($v.form.password)
                            }"
                        />
                    </div>
                    <div v-if="$v.form.password.$error">
                        <div v-if="!$v.form.password.required" class="text-danger">
                            <small>The password field is required</small>
                        </div>
                        <div v-if="!$v.form.password.minLength" class="text-danger">
                            <small>The password must have at least 8 characters</small>
                        </div>
                        <div v-if="!$v.form.password.containsUppercase" class="text-danger">
                            <small>The password must have at least 1 uppercase character</small>
                        </div>
                        <div v-if="!$v.form.password.containsLowercase" class="text-danger">
                            <small>The password must have at least 1 lowercase character</small>
                        </div>
                        <div v-if="!$v.form.password.containsNumber" class="text-danger">
                            <small>The password must have at least 1 digit</small>
                        </div>
                        <div v-if="!$v.form.password.containsSpecial" class="text-danger">
                            <small>The password must have at least 1 special character</small>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" :disabled="$v.form.$invalid">Login</button>
                    </div>
                </form>
                <div class="text-muted">
                    <div>
                        <small><strong>NOTE</strong></small>
                    </div>
                    <div>
                        <small>Admin: Email is john.doe@example.com, Password is Password123#</small>
                    </div>
                    <div>
                        <small>General: Email is jane.doe@example.com, Password is Password123#</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
    name: 'AppLogin',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    validations: {
        form: {
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength( 8 ),
                // https://stackoverflow.com/questions/61176720/how-to-validate-password-with-vuelidate
                containsUppercase: function(value) {
                    return /[A-Z]/.test(value)
                },
                containsLowercase: function(value) {
                    return /[a-z]/.test(value)
                },
                containsNumber: function(value) {
                    return /[0-9]/.test(value)
                },
                containsSpecial: function(value) {
                    return /[#?!@$%^&*-]/.test(value)
                }
            }
        },
    },
    methods: {
        login() {
            
        },
        shouldAppendValidClass( field ) {
                return !field.$invalid && field.$model && field.$dirty;
        },
        shouldAppendErrorClass( field ) {
            return field.$error;
        }
    }
    
}
</script>

<style scoped>

</style>