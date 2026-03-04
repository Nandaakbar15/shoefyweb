<script setup>
import NavAdminComponent from '@/components/NavAdminComponent.vue'
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue'

import axios from 'axios'
import { onMounted, ref } from 'vue'

import { useRoute } from 'vue-router'

const route = useRoute()
const id_user = route.params.id
const namaUser = ref('')
const emailUser = ref('')
const roleUser = ref('')

const detailUser = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/admin/detailUser/${id_user}`)

    const data = response.data.data
    namaUser.value = data.nama_user
    emailUser.value = data.email
    roleUser.value = data.role
  } catch (error) {
    console.error('Error : ', error)
  }
}

onMounted(() => {
  detailUser()
})
</script>

<template>
  <NavAdminComponent />

  <div id="layoutSidenav">
    <SidebarAdminComponent />

    <div id="layoutSidenav_content">
      <main class="container-fluid px-4 mt-4">
        <div class="card">
          <div class="card-header">
            <h1>Detail User</h1>
          </div>

          <div class="card-body text-center">
            <img
              :src="fotoUser"
              alt="Foto User"
              class="rounded-circle mb-3"
              width="120"
              height="120"
            />
            <h5 class="mb-1">{{ namaUser }}</h5>
            <p class="text-muted">{{ emailUser }}</p>

            <div class="row text-center">
              <div class="col-12 mb-2">
                <small class="text-muted">Role</small><br />
                <strong>{{ roleUser }}</strong>
              </div>
            </div>
          </div>
        </div>

        <RouterLink to="/datauser_admin" class="btn btn-secondary mt-3"> Kembali </RouterLink>
      </main>
    </div>
  </div>
</template>
