<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink } from 'vue-router'

// import axios from 'axios'
import { onMounted, ref } from 'vue'

const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('username') || 'Guest'
})
</script>

<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <RouterLink class="nav-link" to="/">
            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
            Dashboard
          </RouterLink>
          <RouterLink class="nav-link" to="/datauser_admin">
            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
            Data User
          </RouterLink>
          <RouterLink class="nav-link" to="/dataprodukadmin">
            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
            Data Produk
          </RouterLink>
          <RouterLink class="nav-link" to="/datakaryawan_admin">
            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
            Data Karyawan
          </RouterLink>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        {{ username }}
      </div>
    </nav>
  </div>
</template>
