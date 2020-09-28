<template>
    <div>
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="pe-7s-user icon-gradient bg-tempting-azure"></i>
                    </div>
                    <div>Master Users</div>
                </div>
            </div>
        </div>            
        <button class="btn btn-primary">Add User</button>
        <div class="main-card mb-3 card mt-4">
            <div class="card-body">            
                <table style="width: 100%;" id="list-user" class="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in users" :key="index">
                            <td>{{ user.email }}</td>
                            <td>
                                <a href=""><i class="fas fa-edit"></i></a>
                                <a href=""><i class="fas fa-trash-alt ml-3"></i></a>
                                <!--
                                <input class="ml-3" type="checkbox" v-model="user.is_active" v-bind:id="user.id" data-toggle="toggle" data-onstyle="success" data-offstyle="danger">
                                -->
                            </td>
                        </tr>
                    </tbody>                    
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../../services/UserService';

export default {
    name: 'user-list',

    data () {
        return {
            users: [],            
        }
    },

    methods: {
        retrieveUsers(){
            UserService.find()
            .then((result) => {
                this.users = result.data;
                document.querySelector('#list-user').classList.add('dataTables');
            }).catch((error) => {
                console.log(error);
            });
        }
    },

    mounted() {
        this.retrieveUsers();
    }
}

</script>
