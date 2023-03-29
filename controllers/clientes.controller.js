const db = require("../models");
const cliente = db.cliente;

/// Funcion para retornar todos las clientes


exports.obtenerAllcliente = async (req, res) => {
  const response = await cliente.findAll();
  if (response !== null && response.length) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "cliente listadas exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontraron cliente",
    });
  }
};

exports.obtenerOnecliente = async (req, res) => {
  id=req.params.id;
  const response = await cliente.findOne({
    where: {
      idCliente:id
    }
  });
  if (response !== null ) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "cliente listado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontro cliente",
    });
  }
};


exports.crearCliente = async (req,res) => {
  const obj=req.body;
  const response = await cliente.create(obj);
  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"cliente Creado",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error creando cliente",
  })
}
};

exports.borrarCliente = async (req,res) => {
  id=req.params.id;
  const response = await cliente.destroy({
    where: {
      idCliente:id
    }
  });  

  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"cliente Borrado",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error borrando cliente",
  })
}
};

exports.actualizarCliente = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const response = await cliente.update(body, {
    where: {
      idCliente: id,
    },
  });

  if (response) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "Cliente modificado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "Ocurrio un error modificando Cliente",
    });
  }
};