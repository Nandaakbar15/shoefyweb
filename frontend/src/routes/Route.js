/* eslint-disable no-unused-vars */
import DashboardAdmin from '@/views/Admin/DashboardAdmin.vue';
import IndexProduk from '@/views/Admin/dataproduk/IndexProduk.vue';
import TambahProduk from '@/views/Admin/dataproduk/TambahProduk.vue';
import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: DashboardAdmin },
  { path: '/dataprodukadmin', component: IndexProduk},
  { path: '/tambahprodukadmin', component: TambahProduk },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
