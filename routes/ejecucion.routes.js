const route = require("express").Router();
const ejecucionController = require("../controllers/ejecucion.controller");

module.exports = (app) => {
  route.get("/", ejecucionController.obtenerAllejecucion);
  route.get("/one/:id", ejecucionController.obtenerOneejecucion);
  route.post("/", ejecucionController.crearEjecucion);
  route.delete("/:id", ejecucionController.borrarEjecucion);
  route.put("/:id", ejecucionController.actualizarEjecucion);
  
  app.use("/api/tuautoca/ejecucion", route);
};