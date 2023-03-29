const Sequelize = require("sequelize");

const miconexion = new Sequelize("tuautoca", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});


const db = {};

db.miconexion = miconexion;
db.Sequelize = Sequelize;


db.mecanico = require("./mecanico.model.js")(miconexion, Sequelize);
db.cliente = require("./cliente.model.js")(miconexion, Sequelize);
db.servicio = require("./servicio.model.js")(miconexion, Sequelize);
db.ejecucion = require("./ejecucion.model.js")(miconexion, Sequelize);


module.exports = db ;






