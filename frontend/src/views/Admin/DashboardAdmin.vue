<script setup>
import NavAdminComponent from '@/components/NavAdminComponent.vue';
import SidebarAdminComponent from '@/components/SidebarAdminComponent.vue';
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
        <h1>Dashboard Admin</h1>
      </main>
    </div>
  </div>
</template>
