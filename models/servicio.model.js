module.exports = (miconexion, Sequelize) => {
    const servicio = miconexion.define(
      "servicio",
      {
        idServicio: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        descripcion : {
          type: Sequelize.STRING,
        },
      },
      {
        tableName: "servicio",
      }
    );
  
    return servicio;
  };