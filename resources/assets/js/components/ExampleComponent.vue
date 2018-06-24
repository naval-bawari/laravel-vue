<template>
    <div class="container">
        <div class="container pt-5">
            <div class="row">
                <div class="col">
                    <!--<button type="button" class="btn btn-primary mb-2" v-on:click="add_form" >Add User</button>-->
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(user,key,index) in listUser">
                            <td>{{user.name}} </td>
                            <td>{{user.email}}</td>
                            <td>
                                <a href="javascript:;" class="btn btn-success" v-on:click="viewAction(user.id)">Edit</a> 
                                <a href="javascript:;" class="btn btn-danger" v-on:click="deleteAction(user.id)"> Delete</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
                <div class="col" v-if="is_add_form">
                    <form class="mt-1" role="form" method="POST" @submit.prevent="addUser">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" v-model="formData.name">
                      </div>                        
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="formData.email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                is_add_form: true,
                formData:{
                
                    name:'',
                    email:'',
                    is_add_update:"add",
                
                },
                listUser : []
            }
        },   
        mounted() {
            this.$Progress.start()
            this.list_user()
            this.$Progress.finish()
        },
    // define methods under the `methods` object
        methods: {
            addUser(){
                axios.post("api/add-user",this.formData).then((response)  =>  {
                    var is_update = "Created"
                    if(this.formData.is_add_update=="update")
                     is_update = "Update"
                    this.formData.name="";
                    this.formData.email="";
                    this.formData.is_add_update="add" ;
                    this.$swal(
                          'Success...',
                          'User '+is_update+' Successfully!!!',
                          'success'
                    )  
                    this.list_user();
                  }, (error)  =>  {
                    console.log("Error")
                })          
            },
            list_user(){
                axios.get("api/list-user")
                  .then((response)  =>  {
                    this.listUser = response.data;
                  }, (error)  =>  {
                    console.log("Error")
                })
            },
            deleteAction(userID){

              var self = this;
              this.$swal({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    axios.get("api/delete-user/"+userID)
                      .then((response)  =>  {
                        this.$swal(
                          'Success...',
                          'User deleted Successfully!!!',
                          'success'
                        )  
                        this.list_user();
                      }, (error)  =>  {
                        console.log("Error")
                    })                          
                })    
              },
              viewAction(userID){
                    this.formData.is_add_update = 'update';
                    axios.get("api/view-user/"+userID)
                      .then((response)  =>  {
                        this.formData = response.data;
                        this.formData.is_add_update = "update";
                        this.list_user();
                      }, (error)  =>  {
                        console.log("Error")
                    }) 
              }

        }
    }
</script>
