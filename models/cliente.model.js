module.exports = (miconexion, Sequelize) => {
    const cliente = miconexion.define(
      "cliente",
      {
        idCliente: {
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
        tableName: "cliente",
      }
    );
  
    return cliente;
  };