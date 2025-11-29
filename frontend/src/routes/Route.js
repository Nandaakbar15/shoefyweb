import Login from '@/Login.vue'
import Register from '@/Register.vue'
import DashboardAdmin from '@/views/Admin/DashboardAdmin.vue'
import IndexKaryawan from '@/views/Admin/datakaryawan/IndexKaryawan.vue'
import Tambahkaryawan from '@/views/Admin/datakaryawan/TambahKaryawan.vue'
import UbahKaryawan from '@/views/Admin/datakaryawan/UbahKaryawan.vue'
import IndexProduk from '@/views/Admin/dataproduk/IndexProduk.vue'
import TambahProduk from '@/views/Admin/dataproduk/TambahProduk.vue'
import UbahProduk from '@/views/Admin/dataproduk/UbahProduk.vue'
import DashboardCustomer from '@/views/Customers/DashboardCustomer.vue'
import IndexUser from '@/views/Admin/dataUser/IndexUser.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import DetailUser from '@/views/Admin/dataUser/DetailUser.vue'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboardadmin', component: DashboardAdmin },
  { path: '/dataprodukadmin', component: IndexProduk },
  { path: '/datauser_admin', component: IndexUser },
  { path: '/detailUser/:id', component: DetailUser, props: true },
  { path: '/datakaryawan_admin', component: IndexKaryawan },
  { path: '/ubahkaryawan/:id_karyawan', component: UbahKaryawan },
  { path: '/tambahkaryawan_admin', component: Tambahkaryawan },
  { path: '/tambahprodukadmin', component: TambahProduk },
  { path: '/ubahproduk/:id_produk', component: UbahProduk, props: true },
  { path: '/dashboardpelanggan', component: DashboardCustomer },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
