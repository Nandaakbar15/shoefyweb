<!-- eslint-disable vue/no-ref-as-operand -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import NavAdminComponent from '@/components/NavAdminComponent.vue';
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue';
import axios from 'axios';
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const route = useRoute();

const navigate = useRouter();

const id_produk = route.params.id_produk;
const namaProduk = ref("");
const merekproduk = ref("");
const stokProduk = ref("");
const priceProduct = ref("");
const gambar = ref(null);
const preview = ref(null);

const getProdukById = async() => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/admin/getProductbyId/${id_produk}`);
    const data = response.data.data;
    namaProduk.value = data.nama_produk;
    merekproduk.value = data.merek_produk;
    stokProduk.value = data.stokProduk;
    priceProduct.value = data.hargaProduk;
    if (data.gambar) {
      preview.value = `http://localhost:3000/img/${data.gambar}`;
    }
  } catch(error) {
    console.error("Error : ", error);
  }
}

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    gambar.value = file;

    const reader = new FileReader();
    reader.onload = (event) => {
      preview.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const updateProduk = async(e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("nama_produk", namaProduk.value);
  formData.append("merek_produk", merekproduk.value);
  formData.append("stokProduk", stokProduk.value);
  formData.append("hargaProduk", priceProduct.value);
  if(gambar.value) {
    formData.append("gambar", gambar.value);
  }

  try {
    await axios.put(`http://localhost:3000/api/v1/admin/updateproduct/${id_produk}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    alert("Data Produk berhasil diubah!");
    navigate.push("/dataprodukadmin");
  } catch(error) {
    console.error("Error : ", error);
  }
}

onMounted(() => {
  getProdukById();
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
        <h1>Ubah data produk</h1>

        <form @submit="updateProduk">
          <div class="mb-3">
            <label for="nama_produk" class="form-label">Nama Produk</label>
            <input type="text" class="form-control" id="nama_produk" v-model="namaProduk">
          </div>
          <div class="mb-3">
            <label for="merek_produk" class="form-label">Merek Produk</label>
            <input type="text" class="form-control" id="merek_produk" v-model="merekproduk">
          </div>
          <div class="mb-3">
            <label for="stokProduk" class="form-label">Stok Produk</label>
            <input type="number" class="form-control" id="stokProduk" v-model="stokProduk">
          </div>
          <div class="mb-3">
            <label for="hargaProduk" class="form-label">Harga Produk</label>
            <input type="number" class="form-control" id="hargaProduk" v-model="priceProduct">
          </div>
          <div class="mb-3">
            <label for="gambar" class="form-label">Gambar</label>
            <div>
              <img v-if="preview" :src="preview" alt="Preview" width="100" class="img-preview mb-2">
              <input type="file" class="form-control" id="gambar" @change="handleImageChange" accept="image/*">
            </div>
          </div>
          <ButtonComponent>
            <template #button-change>
              <button class="btn btn-info mb-3">Ubah!</button>
            </template>
          </ButtonComponent>
          <RouterLink to="/dataprodukadmin" class="btn btn-success">Kembali</RouterLink>
        </form>
      </main>
    </div>
  </div>
</template>
