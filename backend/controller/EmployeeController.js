const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllEmployee = async(req, res) => {
    try {
        const employee = await prisma.employee.findMany();

        res.status(200).json({
            'statusCode': 200,
            'data': employee
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            'statusCode': 404,
            'message': 'Error. Could not fetch the data!'
        });
    }
}

exports.getEmployeeById = async(req, res) => {
    try {
        const parsedIdEmployee = parseInt(req.params.id_karyawan);

        if(!parsedIdEmployee) {
            res.status(401).json({
                'statusCode': 401,
                'message': 'Data with that ID is not found!'
            });
        }

        const employee = await prisma.employee.findUnique({
            where: {id_karyawan: parsedIdEmployee}
        });

        res.status(200).json({
            'statusCode': 200,
            'data': employee
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            'statusCode': 404,
            'message': "Error. Could not fetch the data!"
        });
    }
}

exports.addNewEmplyee = async(req, res) => {
    try {
        const {nama_karyawan, alamat, jabatan, no_telp} = req.body;

        const newEmployee = {
            nama_karyawan,
            alamat,
            jabatan,
            no_telp
        }

        await prisma.employee.create({
            data: newEmployee
        });

        res.status(200).json({
            'statusCode': 200,
            'message': "Berhasil menambahkan karyawan baru!"
        });
    } catch(error) {
        console.error("Error : ", error);
        res.status(404).json({
            'statusCode': 404,
            'message': 'Error. Could not add new data!'
        });
    }
}

exports.updateEmployee = async(req, res) => {
    try {
        const parsedIdEmployee = parseInt(req.params.id_karyawan);
        const {nama_karyawan, alamat, no_telp, jabatan} = req.body;

        const updateData = {
            nama_karyawan,
            alamat,
            no_telp,
            jabatan
        }

        await prisma.employee.update({
            where: {id_karyawan: parsedIdEmployee},
            data: updateData
        });

        res.status(200).json({
            'statusCode': 200,
            'message': 'Berhasil ubah data karyawan!'
        });
    } catch(error) {
        console.error("Error : ", error);
    }
}

exports.deleteEmployee = async(req, res) => {
    try {
        const parsedIdEmployee = parseInt(req.params.id_karyawan);
        
        await prisma.employee.delete({
            where: {id_karyawan: parsedIdEmployee}
        });

        res.status(200).json({
            'statusCode': 200,
            'message': 'Berhasil menghapus data karyawan!'
        })
    } catch(error) {
        console.error("Error : ", error);
    }
}