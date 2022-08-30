<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h3>
                    Details of new session
                </h3>
                <hr />
            </div>
        </div>
        <div class="col-12">
            <form novalidate @submit.prevent="addSession">
                <div class="form-group row">
                    <label htmlFor="sequenceId" class="col-sm-3 col-form-label">Sequence ID</label>
                    <div class="col-sm-9">
                        <input class="form-control" type="text" name="sequenceId" id="sequenceId" placeholder="" aria-describedby="sequenceHelpId" />
                        <small id="sequenceHelpId" class="text-muted">Sequence ID is the serial number of the session in the workshop</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="name" class="col-sm-3 col-form-label">Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" name="name" id="name" placeholder=""  aria-describedby="NameHelpId" />
                        <small id="NameHelpId" class="text-muted">The title of the session</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="speaker" class="col-sm-3 col-form-label">Speaker(s)</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" name="speaker" id="speaker" placeholder="" aria-describedby="speakerHelpId" />
                        <small id="speakerHelpId" class="text-muted">The name of the speaker(s) for this session. Separate speaker names by a comma. Example <strong>John Doe, Jane Doe</strong>.</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="duration" class="col-sm-3 col-form-label">Duration</label>
                    <div class="col-sm-9">
                        <input type="number" class="form-control" name="duration" id="duration" placeholder="" aria-describedby="durationHelpId" />
                        <small id="durationHelpId" class="text-muted">The length of the session in hours</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="level" class="col-sm-3 col-form-label">Level</label>
                    <div class="col-sm-9">
                        <select class="form-control" name="level" id="level">
                            <option value="">-- Select the level of the session --</option>
                            <option value="Basic">Basic</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label htmlFor="duration" class="col-sm-3 col-form-label">Abstract</label>
                    <div class="col-sm-9">
                        <textarea type="number" class="form-control" name="abstract" id="abstract" aria-describedby="abstractHelpId"></textarea>
                        <small id="abstractHelpId" class="text-muted">A brief description of the session topics</small>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-sm-3 col-sm-9">
                        <button type="submit" class="btn btn-primary mr-2">Add session</button>
                        <button type="button" class="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddSession',
        props: {
            id: Number
        },
        data() {
            return {
                
            };
        },
        methods: {
            validate() {

            },
            addSession() {

            }
        }
    }
</script>

<style scoped>

</style>