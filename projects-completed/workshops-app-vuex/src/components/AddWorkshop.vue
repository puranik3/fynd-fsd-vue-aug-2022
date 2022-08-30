<template>
    <div class="container">
        <div class="row">
            <div class="col-12 clearfix">
                <h1>
                    Details of new workshop
                </h1>
                <hr />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form novalidate @submit.prevent="addWorkshop">
                    <div class="form-group row">
                        <label htmlFor="name" class="col-sm-3 col-form-label">Name</label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="name" id="name" placeholder="" aria-describedby="nameHelpId" />
                            <small id="nameHelpId" class="text-muted">The name of the workshop</small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="description" class="col-sm-3 col-form-label">Description</label>
                        <div class="col-sm-9">
                            <textarea class="form-control" name="description" id="description" placeholder=""  aria-describedby="descriptionHelpId"></textarea>
                            <small id="descriptionHelpId" class="text-muted">A description of the workshop</small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="startDate" class="col-sm-3 col-form-label">Start date</label>
                        <div class="col-sm-9">
                            <input type="date" class="form-control" name="startDate" id="startDate" placeholder="" aria-describedby="startDateHelpId" />
                            <small id="startDateHelpId" class="text-muted">The date on which the workshops begins</small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="endDate" class="col-sm-3 col-form-label">End date</label>
                        <div class="col-sm-9">
                            <input type="date" class="form-control" name="endDate" id="endDate" placeholder="" aria-describedby="endDateHelpId" />
                            <small id="endDateHelpId" class="text-muted">The date on which the workshops ends</small>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label htmlFor="time" class="col-sm-3 col-form-label">Time</label>
                        <div class="col-sm-9">
                            <input class="form-control" type="text" name="time" id="time" placeholder="9:30 am - 1:30 pm" aria-describedby="timeHelpId" />
                            <small id="timeHelpId" class="text-muted">The timings of the workshop</small>
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
    </div>
</template>

<script>
    export default {
        name: 'AddWorkshop',
        data() {
            return {
                
            };
        },
        methods: {
            validate() {

            },
            addWorkshop() {

            }
        }
    }
</script>

<style scoped>
</style>