<!-- eslint-disable no-unused-vars -->
<script setup>
import NavAdminComponent from '@/components/NavAdminComponent.vue';
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue';

// import router
import { RouterLink, useRouter } from 'vue-router';

// import axios to add the data
import axios from 'axios';

// import ref
import { ref } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const namaProduk = ref("");
const merekProduk = ref("");
const stokProduk = ref("");
const priceProduct = ref("");
const image = ref(null);

const navigate = useRouter();

const handleImageChange = (e) => {
  image.value = e.target.files[0];
};

const addNewProducts = async(e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("nama_produk", namaProduk.value);
  formData.append("merek_produk", merekProduk.value);
  formData.append("stokProduk", stokProduk.value);
  formData.append("hargaProduk", priceProduct.value);
  if (image.value) {
    formData.append('gambar', image.value); // name must match backend
  }

  try {
    await axios.post("http://localhost:3000/api/v1/admin/addProduct", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    alert("Data produk berhasil di tambahkan!");
    navigate.push('/dataprodukadmin');
  } catch(error) {
    console.error("Error : ", error);
    document.writeln("<h2>Error, could not add the data!</h2>");
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
        <h1>Form Tambah Data Produk</h1>

        <form @submit="addNewProducts">
          <div class="mb-3">
            <label for="nama_produk" class="form-label">Nama Produk</label>
            <input type="text" class="form-control" id="nama_produk" v-model="namaProduk">
          </div>
          <div class="mb-3">
            <label for="merek_produk" class="form-label">Merek Produk</label>
            <input type="text" class="form-control" id="merek_produk" v-model="merekProduk">
          </div>
          <div class="mb-3">
            <label for="stokProduk" class="form-label">Stok Produk</label>
            <input type="number" class="form-control" id="stokProduk" v-model="stokProduk">
          </div>
          <div class="mb-3">
            <label for="hargaProduk" class="form-label">Harga Produk</label>
            <input type="text" class="form-control" id="hargaProduk" v-model="priceProduct">
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Upload Gambar</label>
            <input type="file" class="form-control" id="gambar" @change="handleImageChange" accept="image/*" />
          </div>
          <ButtonComponent>
            <template #button-add>
              <button class="btn btn-primary mb-3">Tambah</button>
            </template>
          </ButtonComponent>
        </form>
        <RouterLink to="/dataprodukadmin" class="btn btn-success">Kembali</RouterLink>
      </main>
    </div>
  </div>
</template>
