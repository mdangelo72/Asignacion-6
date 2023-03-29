const route = require("express").Router();
const servicioController = require("../controllers/servicio.controller");

module.exports = (app) => {
  route.get("/", servicioController.obtenerAllservicio);
  route.get("/one/:id", servicioController.obtenerOneservicio);
  route.post("/", servicioController.crearservicio);
  route.delete("/:id", servicioController.borrarservicio);
  route.put("/:id", servicioController.actualizarservicio);
  
  app.use("/api/tuautoca/servicio", route);
};