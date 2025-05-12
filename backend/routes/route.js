const express = require("express");
const router = express();
const upload = require("../config/upload");
const { getAllProduk, addProduct, getAllProdukById, updateProduk, deleteProduk } = require("../controller/ProdukController");

router.get("/api/v1/admin/getallproduct", getAllProduk);

router.get("/api/v1/admin/getProductbyId/:id_produk", getAllProdukById);

router.post("/api/v1/admin/addProduct", upload.single("gambar"), addProduct);

router.put("/api/v1/admin/updateproduct/:id_produk", upload.single("gambar"), updateProduk);

router.delete("/api/v1/admin/deleteProduct/:id_produk", deleteProduk);


module.exports = router;