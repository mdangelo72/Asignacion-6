const route = require("express").Router();
const clienteController = require("../controllers/clientes.controller");

module.exports = (app) => {
  route.get("/", clienteController.obtenerAllcliente);
  route.get("/one/:id", clienteController.obtenerOnecliente);
  route.post("/", clienteController.crearCliente);
  route.delete("/:id", clienteController.borrarCliente);
  route.put("/:id", clienteController.actualizarCliente);
  
  app.use("/api/tuautoca/cliente", route);
};