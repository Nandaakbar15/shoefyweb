<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { RouterLink, useRouter } from 'vue-router';
  import axios from 'axios';
  import { ref } from 'vue';

  const email = ref("");
  const password = ref("");
  const role = ref("");
  const navigate = useRouter();

  const Login = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/login", {
        email: email.value,
        password: password.value
      });

      const token = response.data.token;
      localStorage.setItem("token", token);

      const payload = JSON.parse(atob(token.split(".")[1]));
      role.value = payload.role;

      // mengecek role user apakah admin atau bukan
      if(payload.role === "admin") {
        navigate.push("/dashboardadmin");
      } else {
        navigate.push("/dashboardpelanggan");
      }
    } catch(error) {
      console.error("Error : ", error);
      alert("Error! Could not login.");
    }
  }
</script>

<template>
  <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                        <form @submit="Login">
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" v-model="email"/>
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputPassword" type="password" placeholder="Password" v-model="password"/>
                                                <label for="inputPassword">Password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                              <button class="btn btn-primary">Login!</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><RouterLink to="/register">Belum punya akun? Register aja!</RouterLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
