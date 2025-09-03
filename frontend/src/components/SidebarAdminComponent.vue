<!-- eslint-disable no-unused-vars -->
<script setup>
import { RouterLink } from 'vue-router';
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
                        Start Bootstrap
                    </div>
                </nav>
            </div>
</template>
