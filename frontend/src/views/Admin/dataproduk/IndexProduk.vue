<!-- eslint-disable no-unused-vars -->
<script setup>
// import component
import NavAdminComponent from '@/components/NavAdminComponent.vue';
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue';

// import on mounted and ref
import { onMounted, ref } from 'vue';

import { RouterLink } from 'vue-router';

// import axios to fetch the data
import axios from 'axios';

const dataproducts = ref([]);

const getAllProduct = async() => {
  const response = await axios.get("http://localhost:3000/api/v1/admin/getallproduct");

  dataproducts.value = response.data.data;
}

const deleteProduk = async(id_produk) => {
  try {
    await axios.delete(`http://localhost:3000/api/v1/admin/deleteProduct/${id_produk}`);
    alert("Data produk berhasil di hapus!");
  } catch(error) {
    console.error("Error : ", error);
  }
}

onMounted(() => {
  getAllProduct();
});

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
        <h1>Data Produk</h1>

        <h2>
          <RouterLink to="/tambahprodukadmin" class="btn btn-primary">Tambah Data Produk</RouterLink>
        </h2>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Gambar Produk</th>
              <th scope="col">Nama Produk</th>
              <th scope="col">Merek</th>
              <th scope="col">Stok Produk</th>
              <th scope="col">Harga Produk</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in dataproducts" :key="product.id_produk">
              <td><img :src="`http://localhost:3000/img/${product.gambar}`" width="100"></td>
              <td>{{ product.nama_produk }}</td>
              <td>{{ product.merek_produk }}</td>
              <td>{{ product.stokProduk }}</td>
              <td>Rp. {{ product.hargaProduk }}</td>
              <td>
                <RouterLink :to="`/ubahproduk/${product.id_produk}`" class="btn btn-primary">Ubah</RouterLink>
              </td>
              <td>
                <button class="btn btn-danger" @click="deleteProduk(product.id_produk)">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>
</template>
