<!-- eslint-disable no-unused-vars -->
<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import NavAdminComponent from '@/components/NavAdminComponent.vue';
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue';
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const namaKaryawan = ref("");
const alamatKaryawan = ref("");
const nomorTelpKaryawan = ref("");
const jabatanKaryawan = ref("");

const navigate = useRouter();

const addEmployee = async(e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3000/api/v1/admin/addnew_employee", {
      nama_karyawan: namaKaryawan.value,
      alamat: alamatKaryawan.value,
      no_telp: nomorTelpKaryawan.value,
      jabatan: jabatanKaryawan.value
    });

    alert(response.data.message);
    navigate.push("/datakaryawan_admin");
  }catch(error) {
    console.error("Error : ", error);
  }
}

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
        <h1>Form tambah data karyawan</h1>

        <div class="card">
          <div class="card-body">
            <form @submit="addEmployee">
              <div class="mb-3">
                <label for="nama" class="form-label">Nama Karyawan</label>
                <input type="text" class="form-control" id="nama" v-model="namaKaryawan">
              </div>
              <div class="mb-3">
                <label for="alamat" class="form-label">Alamat Karyawan</label>
                <input type="text" class="form-control" id="alamat" v-model="alamatKaryawan">
              </div>
              <div class="mb-3">
                <label for="no_telp" class="form-label">Nomor telepon Karyawan</label>
                <input type="text" class="form-control" id="no_telp" v-model="nomorTelpKaryawan">
              </div>
              <div class="mb-3">
                <label for="jabatan" class="form-label">Jabatan Karyawan</label>
                <input type="text" class="form-control" id="jabatan" v-model="jabatanKaryawan">
              </div>
              <ButtonComponent>
                <template #button-add>
                  <button class="btn btn-primary mb-3">Tambah</button>
                </template>
              </ButtonComponent>
          </form>
          </div>
        </div>
        <RouterLink to="/admin/datakaryawan_admin" class="btn btn-secondary">
          Kembali
        </RouterLink>
      </main>
    </div>
  </div>
</template>
