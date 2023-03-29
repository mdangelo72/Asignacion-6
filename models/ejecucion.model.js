module.exports = (miconexion, Sequelize) => {
    const ejecucion = miconexion.define(
      "ejecucion",
      {
        idEjecucion: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idCliente : {
          type: Sequelize.INTEGER,
        },
        idServicio : {
          type: Sequelize.INTEGER,
        },
        idMecanico : {
          type: Sequelize.INTEGER,
        },
        fechaejec : {
        type: Sequelize.DATE,
      },
      },
      {
        tableName: "ejecucion",
      }
    );
  
    return ejecucion;
  };