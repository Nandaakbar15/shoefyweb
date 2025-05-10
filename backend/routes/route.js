const express = require("express");
const router = express();
const upload = require("../config/upload");
const { getAllProduk, addProduct, getAllProdukById } = require("../controller/ProdukController");

router.get("/api/v1/admin/getallproduct", getAllProduk);

router.get("/api/v1/admin/getProductbyId/:id_product", getAllProdukById);

router.post("/api/v1/admin/addProduct", upload.single("gambar"), addProduct);


module.exports = router;