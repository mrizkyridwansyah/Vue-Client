<template>
	<div class="row">
		<div class="col-md-6">
		    <div class="main-card mb-3 card">
		        <div class="card-body">
		            <h5 class="card-title">Add User</h5>
		            <form action="#" @submit.prevent>
		                <div class="position-relative form-group">
		                    <label for="email" class="">Email</label>
		                    <input id="email" type="email" class="form-control" v-model="user.email">
		                </div>
		                <div class="form-row">
		                    <div class="col-md-6">
		                        <div class="position-relative form-group">
		                            <label for="password" class="">Password</label>
		                            <input id="password" type="password" class="form-control" v-model="user.password">
		                        </div>
		                    </div>
		                    <div class="col-md-6">
		                        <div class="position-relative form-group">
		                            <label for="password-confirm" class="">Confirm Password</label>
		                            <input id="password-confirm" type="password" class="form-control" v-model="user.confirmpassword">
		                        </div>
		                    </div>
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
	name: 'user-add',

	data() {
		return {
			user: {
				id: null,
				email: "",
				password: "",
				confirmpassword: ""
			}
		}
	},

	methods: {
		userSubmit() {
			if(this.user.password != this.user.confirmpassword){
				document.getElementById('password-confirm').classList.add('is-invalid');
			}
			else{
				let data = {
					email: this.user.email,
					password: this.user.password,
				};

				UserService.create(data)
					.then((result) => {
						this.user.id = result.data.id;
						this.user.email = result.data.email;
						this.$swal({
							type: 'success',
							icon: 'success',
							title: 'SUCCESS',
							text: 'User created successfully'
						})
						this.$router.push({ name: "user" });
					}).catch((err) => {
						this.$swal({
							type: 'error',
							icon: 'error',
							title: 'Oops...',
							text: err.response.data.message
						});					
					})
			}
		}
	},
}

</script>