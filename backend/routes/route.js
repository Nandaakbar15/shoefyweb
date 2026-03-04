const express = require("express");
const router = express();
const upload = require("../config/upload");
const {
  getAllProduk,
  addProduct,
  getAllProdukById,
  updateProduk,
  deleteProduk,
} = require("../controller/ProdukController");
const {
  getAllEmployee,
  addNewEmplyee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controller/EmployeeController");
const {
  getAllUsers,
  detailUser,
  changePassword,
} = require("../controller/UserController");

const {
  listProduct,
  detailProduct,
} = require("../controller/PelangganController");
const { register } = require("../controller/RegisterController");
const { login, logout } = require("../controller/LoginController");

// endpoint register and login
router.post("/api/v1/login", login);
router.post("/api/v1/register", register);
router.get("/api/v1/logout", logout);

// endpoint admin

// endpoint admin produk
router.get("/api/v1/admin/getallproduct", getAllProduk);

router.get("/api/v1/admin/getProductbyId/:id_produk", getAllProdukById);

router.post("/api/v1/admin/addProduct", upload.single("gambar"), addProduct);

router.put(
  "/api/v1/admin/updateproduct/:id_produk",
  upload.single("gambar"),
  updateProduk
);

router.delete("/api/v1/admin/deleteProduct/:id_produk", deleteProduk);

// endpoint admin user
router.get("/api/v1/admin/getalluser", getAllUsers);
router.get("/api/v1/admin/detailUser/:id", detailUser);

// endpoint admin employee
router.get("/api/v1/admin/getallemployee", getAllEmployee);
router.get("/api/v1/admin/getEmployeebyId/:id_karyawan", getEmployeeById);
router.post("/api/v1/admin/addnew_employee", addNewEmplyee);
router.put("/api/v1/admin/update_employee/:id_karyawan", updateEmployee);
router.delete("/api/v1/admin/delete_employee/:id_karyawan", deleteEmployee);

// endpoint customer
router.get("/api/v1/customer/products", listProduct);

router.get("/api/v1/customer/detailproducts/:id_produk", detailProduct);

module.exports = router;
