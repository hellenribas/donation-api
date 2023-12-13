const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
      if (err) {
        res.status(403).json("Token inválido");
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.status(403).json("Erro na autenticação");
  }
}

module.exports = {
  verifyToken,
};
