const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      statusCode: 200,
      data: users,
    });
  } catch (error) {
    console.error("Error : ", error);

    res.status(400).json({
      statusCode: 400,
      message: "Error! Could not retrieve the data.",
    });
  }
};

exports.detailUser = async (req, res) => {
  try {
    const idUserParsed = parseInt(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id: idUserParsed },
    });

    res.status(201).json({
      statusCode: 201,
      data: user,
    });
  } catch (error) {
    console.error("Error : ", error);
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const idUserParsed = parseInt(req.params.id);

    const updatedPassword = {
      password: hashedPassword,
    };

    await prisma.user.update({
      where: { id: idUserParsed },
      data: updatedPassword,
    });

    res.status(200).json({
      statusCode: 200,
      message: "Password changed successfully!",
    });
  } catch (error) {
    console.error("Error : ", error);

    res.status(400).json({
      statusCode: 400,
      message: "Error! Could not change the password.",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const idUserParsed = parseInt(req.params.id);

    await prisma.user.delete({
      where: { id: idUserParsed },
    });

    res.status(200).json({
      statusCode: 200,
      message: "User deleted successfully!",
    });
  } catch (error) {
    console.error("Error : ", error);

    res.status(400).json({
      statusCode: 400,
      message: "Error! Could not delete the user.",
    });
  }
};
