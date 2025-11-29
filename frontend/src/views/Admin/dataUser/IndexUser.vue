<script setup>
import NavAdminComponent from '@/components/NavAdminComponent.vue'
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue'

import axios from 'axios'
import { onMounted, ref } from 'vue'

const dataUser = ref([])

const getUser = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/admin/getalluser')

    dataUser.value = response.data.data
  } catch (error) {
    console.error('Error : ', error)
  }
}

const deleteUser = async (id_user) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/v1/admin/${id_user}`)

    alert(response.data.message)
  } catch (error) {
    console.error('Error : ', error)
  }
}

onMounted(() => {
  getUser()
})
</script>

<template>
  <!-- Top nav fixed at top -->
  <NavAdminComponent />

  <!-- Main layout wrapper -->
  <div id="layoutSidenav">
    <!-- Sidebar -->
    <SidebarAdminComponent />

    <!-- Page content -->
    <div id="layoutSidenav_content">
      <main class="container-fluid px-4 mt-4">
        <h1>Data User</h1>

        <div class="card">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID User</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in dataUser" :key="user.id_karyawan">
                  <td>{{ user.id }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <RouterLink :to="`/detailUser/${user.id}`" class="btn btn-primary"
                      >Detail</RouterLink
                    >
                  </td>
                  <td>
                    <button class="btn btn-danger" @click="deleteUser(user.id)">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
