const errors = (err, req, res, next) => {
  switch (err.message) {
    case "InvalidEmailOrPassword":
      res.status(401).json({ message: "E-mail ou senha inválidos" });
      break;
    case "InvalidRegister":
      res.status(401).json({
        message: "Algo deu errado na criação da conta. Tente Novamente",
      });
      break;
    case "ProductNotFound":
      res.status(404).json({ message: "Produto não encontrado" });
      break;
    case "ProductNotCreated":
      res
        .status(404)
        .json({
          message: "Algo deu errado na criação do produto. Tente Novamente",
        });
      break;
    case "EventNotCreated":
      res
        .status(404)
        .json({
          message: "Algo deu errado na criação do evento. Tente Novamente",
        });
      break;
    case "EventNotFound":
      res.status(404).json({ message: "Evento não encontrado" });
      break;
    default:
      console.error(err.stack);
      res.status(500).json({ message: "Algo deu errado!" });
  }
};

module.exports = {
  errors,
};
