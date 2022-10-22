<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Subscription</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="email" class="form-control" v-model="user.Description" required>
                </div>

                <div class="form-group">
                    <label>Amount</label>
                    <input type="text" class="form-control" v-model="user.Amount" required>
                </div>

                <div class="form-group">
                    <label>Payment Frequency</label>
                    <select id='frequency' class="form-control" v-model="user.frequency" required>
                        <option value='weekly'>Weekly</option>
                        <option value='bimonthly'>Bi-monthly</option>
                        <option value='monthly'>Monthly</option>
                        <option value='quarterly'>Quarterly</option>
                        <option value='biannually'>Bi-annually</option>
                        <option value='annually'>Annually</option>
                    </select>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update Subscription</button>
                </div>
                </form>
        </div>
    </div>
</template>

<script>
 import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                user: {
            }
        }
    },
    methods: {
        onUpdateForm(event) {
            event.preventDefault()
            db.collection('users').doc(this.$route.params.id)
            .update(this.user).then(() => {
                console.log("User successfully updated!");
                this.$router.push('/list')
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}      
</script>