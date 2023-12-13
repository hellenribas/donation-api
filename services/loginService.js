const LoginModel = require("../models/loginSchema");

const bcrypt = require("bcrypt");

const hashGenerator = async (password) => {
  const response = await bcrypt.hash(password, 10);
  return response;
};

const createLoginService = async (email, password) => {
  const user = await LoginModel.findOne({ email }).exec();
  if (user) throw new Error("Usuário já existe");
  const hashPassword = await hashGenerator(password);
  console.log({ hashPassword });
  const doc = await LoginModel.create({ email, password: hashPassword });
  return doc;
};

const postLoginService = async (email, password) => {
  const login = await LoginModel.findOne({ email }).exec();
  console.log(login);
  const compare = await bcrypt.compare(password, login.password);
  if (!compare) {
    throw new Error("Dados inválidos");
  }
  return login;
};

module.exports = {
  postLoginService,
  createLoginService,
};
