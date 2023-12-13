const mongoose = require("../services/loginService");
const loginService = require("../services/loginService");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const createLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.createLoginService(email, password);
    if (!login) {
      throw new Error("InvalidRegister");
    }
    return res.status(200).json({
      message: "Conta criada com sucesso",
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

const postLoginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.postLoginService(email, password);
    if (!login) {
      next();
    }
    const token = jwt.sign({ id: login._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Login realizado com sucesso",
      token,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  postLoginController,
  createLoginController,
};
