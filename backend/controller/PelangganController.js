const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.listProduct = async(req, res) => {
    try {
        const products = await prisma.produk.findMany();
        res.status(200).json({
            statusCode: 200,
            data: products
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error, could not retrieve the data!"
        });
    }
}

exports.detailProduct = async(req, res) => {
    try {
        const idproductParsed = parseFloat(req.params.id_produk);
        const product = await prisma.produk.findUnique({
            where: {id_produk: idproductParsed},
        });

        res.status(200).json({
            statusCode: 200,
            data: product
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            statusCode: 404,
            message: "Error, could not get the data with that ID"
        });
    }
}