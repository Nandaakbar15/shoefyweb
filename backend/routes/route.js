const express = require("express");
const router = express();
const upload = require("../config/upload");
const { getAllProduk, addProduct, getAllProdukById, updateProduk, deleteProduk } = require("../controller/ProdukController");
const { listProduct, detailProduct } = require("../controller/PelangganController");

// endpoint admin
router.get("/api/v1/admin/getallproduct", getAllProduk);

router.get("/api/v1/admin/getProductbyId/:id_produk", getAllProdukById);

router.post("/api/v1/admin/addProduct", upload.single("gambar"), addProduct);

router.put("/api/v1/admin/updateproduct/:id_produk", upload.single("gambar"), updateProduk);

router.delete("/api/v1/admin/deleteProduct/:id_produk", deleteProduk);

// endpoint customer
router.get("/api/v1/customer/products", listProduct);

router.get("/api/v1/customer/detailproducts/:id_produk", detailProduct);

module.exports = router;