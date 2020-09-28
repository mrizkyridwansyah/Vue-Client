<template>
	<div class="row">
		<div class="col-md-6">
		    <div class="main-card mb-3 card">
		        <div class="card-body">
		            <h5 class="card-title">Edit User</h5>
		            <form action="#" @submit.prevent>
		                <div class="position-relative form-group">
		                    <label for="email" class="">Email</label>
		                    <input id="email" type="email" class="form-control" v-model="user[0].email">
		                </div>
		                <div class="position-relative form-group">
		                    <label class="">Status</label>		                   
	                        <input class="ml-5" type="checkbox" v-model="user[0].is_active" v-bind:id="user[0].id" data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
		                </div>
		            </form>
		            <button @click="userSubmit()" class="mt-2 btn btn-primary">Save</button>
		        </div>
		    </div>
	    </div>
    </div>
</template>

<script>
import UserService from '../../services/UserService';

export default {
	name: 'user-detail',

	data() {
		return {
			user: {
				id: null,
				email: '',
				is_active: false
			}
		}
	},

	mounted(){
		this.retrieveUserById(this.$route.params.id);
	},

	methods: {
        retrieveUserById(id){
            UserService.get(id)
            .then((result) => {
                this.user = result.data;
                console.log(this.user);
            }).catch((error) => {
                console.log(error);
            });
        }
	},

}
</script>