<!-- eslint-disable no-unused-vars -->
<script setup>
import NavAdminComponent from '@/components/NavAdminComponent.vue';
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue';

import axios from 'axios';
import { onMounted, ref } from 'vue';

const dataKaryawan = ref([]);

const getEmployee = async() => {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/admin/getAllEmployee");

    dataKaryawan.value = response.data.data
  } catch(error) {
    console.error("Error : ", error);
  }
}

const deleteEmployee = async(id_karyawan) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/v1/admin/delete_employee/${id_karyawan}`);

    alert(response.data.message);
  } catch(error) {
    console.error("Error : ", error);
  }
}

onMounted(() => {
  getEmployee();
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
        <h1>Data Karyawan</h1>

        <h2>
          <RouterLink to="/tambahkaryawan_admin" class="btn btn-primary">
            Tambah Karyawan
          </RouterLink>
        </h2>

        <div class="card">
          <div class="card-body">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID Karyawan</th>
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
                <th scope="col">Nomor HP</th>
                <th scope="col">Jabatan</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="karyawan in dataKaryawan" :key="karyawan.id_karyawan">
                <td>{{ karyawan.id_karyawan }}</td>
                <td>{{ karyawan.nama_karyawan }}</td>
                <td>{{ karyawan.alamat }}</td>
                <td>{{ karyawan.no_telp }}</td>
                <td>{{ karyawan.jabatan }}</td>
                <td>
                  <RouterLink :to="`/ubahkaryawan/${karyawan.id_karyawan}`" class="btn btn-primary">Ubah</RouterLink>
                </td>
                <td>
                  <button class="btn btn-danger" @click="deleteEmployee(karyawan.id_karyawan)">Hapus</button>
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
