module.exports = (miconexion, Sequelize) => {
    const mecanico = miconexion.define(
      "mecanico",
      {
        idMecanico: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre : {
          type: Sequelize.STRING,
        },
        apellido : {
          type: Sequelize.STRING,
        },
        direccion : {
          type: Sequelize.STRING,
        },
      },
      {
        tableName: "mecanico",
      }
    );
  
    return mecanico;
  };