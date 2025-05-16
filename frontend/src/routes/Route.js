
import Login from '@/Login.vue';
import Register from '@/Register.vue';
import DashboardAdmin from '@/views/Admin/DashboardAdmin.vue';
import IndexProduk from '@/views/Admin/dataproduk/IndexProduk.vue';
import TambahProduk from '@/views/Admin/dataproduk/TambahProduk.vue';
import UbahProduk from '@/views/Admin/dataproduk/UbahProduk.vue';
import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: "/", redirect: '/login'},
  { path: '/login', name:'login', component: Login },
  { path: '/register', component: Register},
  { path: '/dashboardadmin', component: DashboardAdmin },
  { path: '/dataprodukadmin', component: IndexProduk},
  { path: '/tambahprodukadmin', component: TambahProduk },
  { path: '/ubahproduk/:id_produk', component: UbahProduk, props: true}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
