<!-- eslint-disable no-unused-vars -->
<script setup>
import NavAdminComponent from '@/components/NavAdminComponent.vue';
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const id_karyawan = route.params.id_karyawan;
const namaKaryawan = ref("");
const alamatKaryawan = ref("");
const nomorTelpKaryawan = ref("");
const jabatanKaryawan = ref("");
const navigate = useRouter();

const getKaryawanByid = async() => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/admin/getEmployeebyId/${id_karyawan}`);
    const data = response.data.data;
    namaKaryawan.value = data.nama_karyawan;
    alamatKaryawan.value = data.alamat;
    nomorTelpKaryawan.value = data.no_telp;
    jabatanKaryawan.value = data.jabatan;
  } catch(error) {
    console.error("Error : ", error);
  }
}

const updateKaryawan = async(e) => {
  e.preventDefault();
  try {
    const response = await axios.put(`http://localhost:3000/api/v1/admin/update_employee/${id_karyawan}`, {
      nama_karyawan: namaKaryawan.value,
      alamat: alamatKaryawan.value,
      no_telp: nomorTelpKaryawan.value,
      jabatan: jabatanKaryawan.value
    });

    alert(response.data.message);
    navigate.push("/datakaryawan_admin");
  } catch(error) {
    console.error("Error : ", error);
  }
}


onMounted(() => {
  getKaryawanByid();
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
        <h1>Form Ubah Karyawan</h1>

        <div class="card">
          <div class="card-body">
            <form @submit="updateKaryawan">
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
                <template #button-change>
                  <button class="btn btn-success mb-3">Ubah</button>
                </template>
              </ButtonComponent>
          </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
