const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllProduk = async(req, res) => {
    try {
        const products = await prisma.produk.findMany();
        res.status(200).json({
            statusCode: 200,
            data: products
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(400).json({
            statusCode: 400,
            message: "Error! Could not retrieve the data."
        });
    }
}

exports.getAllProdukById = async(req, res) => {
    try {
        const idProductParsed = parseInt(req.params.id_produk);
        const product = await prisma.produk.findUnique({
            where: {id_produk: idProductParsed}
        });

        res.status(200).json({
            statusCode: 200,
            data: product
        })
    } catch(error) {
        console.error("Error : ", error);
        res.status(400).json({
            statusCode: 400,
            message: "Error! Could not retrieve the data"
        });
    }
}

exports.addProduct = async(req, res) => {
    try {
        const {nama_produk, merek_produk, stokProduk, hargaProduk} = req.body;
        const gambar = req.file ? req.file.filename : null;
        const stokProdukParsed = parseInt(stokProduk);
        const hargaProdukParsed = parseInt(hargaProduk);

        await prisma.produk.create({
            data: {
                nama_produk,
                merek_produk,
                stokProduk: stokProdukParsed,
                hargaProduk: hargaProdukParsed,
                gambar
            }
        });

        res.status(200).json({
            statusCode: 200,
            message: "New Product added!"
        });
        
    } catch(error) {
        res.status(400).json({
            statusCode: 400,
            message: "Error! Could not add the data!"
        })
        console.error("Error : ", error);
    }
}


exports.updateProduk = async(req, res) => {
    try {
        const parsedIdProduct = parseInt(req.params.id_produk);
        const {nama_produk, merek_produk, stokProduk, hargaProduk} = req.body;
        const parsedStokproduk = parseInt(stokProduk);
        const parsePriceProduk = parseInt(hargaProduk);
        const gambar = req.file ? req.file.filename : null;

        const updateData = {
            nama_produk,
            merek_produk,
            stokProduk: parsedStokproduk,
            hargaProduk: parsePriceProduk,
            gambar
        };

        await prisma.produk.update({
            where: {id_produk: parsedIdProduct},
            data: updateData
        });

        res.status(201).json({
            statusCode: 201,
            message: "Data successfully updated!"
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not update the data!"
        });
    }
}

exports.deleteProduk = async(req, res) => {
    try {
        const parsedIdproduct = parseInt(req.params.id_produk);
        await prisma.produk.delete({
            where: {id_produk: parsedIdproduct}
        });

        res.status(200).json({
            statusCode: 200,
            message: "Data successfully deleted!"
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error! Could not delete the data."
        });
    }
}
