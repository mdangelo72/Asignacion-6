const db = require("../models");
const mecanico = db.mecanico;

/// Funcion para retornar todos las mecanicos


exports.obtenerAllmecanico = async (req, res) => {
  const response = await mecanico.findAll();
  if (response !== null && response.length) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "Mecanico listadas exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontraron mecanico",
    });
  }
};

exports.obtenerOnemecanico = async (req, res) => {
  id=req.params.id;
  const response = await mecanico.findOne({
    where: {
      idMecanico:id
    }
  });
  if (response !== null ) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "Mecanico listado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontro mecanico",
    });
  }
};


exports.crearMecanico = async (req,res) => {
  const obj=req.body;
  const response = await mecanico.create(obj);
  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"Mecanico Creado",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error creando mecanico",
  })
}
};

exports.borrarMecanico = async (req,res) => {
  id=req.params.id;
  const response = await mecanico.destroy({
    where: {
      idMecanico:id
    }
  });  

  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"Mecanico Borrado",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error borrando mecanico",
  })
}
};

exports.actualizarMecanico = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const response = await mecanico.update(body, {
    where: {
      idMecanico: id,
    },
  });

  if (response) {
    res.status(200).json({
      statusCode: 200,
      data: null,
      message: "Mecanico modificado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "Ocurrio un error modificando Macanico",
    });
  }
};