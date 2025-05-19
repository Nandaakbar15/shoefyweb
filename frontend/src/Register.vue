<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, useRouter, } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';
import ButtonComponent from './components/ButtonComponent.vue';

const username = ref("");
const email = ref("");
const password = ref("");

const navigate = useRouter();

const Register = async(e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:3000/api/v1/register", {
      username: username.value,
      email: email.value,
      password: password.value
    });

    alert("Register sukses!");
    navigate.push("/login");

  } catch(error) {
    console.error("Error : ", error);
    alert("Error! Could not add new user or register.");
  }
}



</script>

<template>
  <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div class="card-body">
                                        <form @submit="Register">
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="username" type="text" placeholder="Enter your username" v-model="username"/>
                                                        <label for="username">Username</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="email" type="email" name="email" placeholder="name@example.com" v-model="email"/>
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password" type="password" name="password" placeholder="Create a password" v-model="password"/>
                                                        <label for="inputPassword">Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid"><button class="btn btn-primary btn-block">Register!</button></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><RouterLink to="/login">Sudah punya akun? Langsung login aja!</RouterLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
