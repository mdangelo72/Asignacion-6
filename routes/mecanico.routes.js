const route = require("express").Router();
const mecanicoController = require("../controllers/mecanico.controller");

module.exports = (app) => {
  route.get("/", mecanicoController.obtenerAllmecanico);
  route.get("/one/:id", mecanicoController.obtenerOnemecanico);
  route.post("/", mecanicoController.crearMecanico);
  route.delete("/:id", mecanicoController.borrarMecanico);
  route.put("/:id", mecanicoController.actualizarMecanico);
  
  app.use("/api/tuautoca/mecanico", route);
};