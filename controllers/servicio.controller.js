const db = require("../models");
const servicio = db.servicio;

/// Funcion para retornar todos las servicios


exports.obtenerAllservicio = async (req, res) => {
  const response = await servicio.findAll();
  if (response !== null && response.length) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "servicio listadas exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontraron servicio",
    });
  }
};

exports.obtenerOneservicio = async (req, res) => {
  id=req.params.id;
  const response = await servicio.findOne({
    where: {
      idServicio:id
    }
  });
  if (response !== null ) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "servicio listado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontro servicio",
    });
  }
};


exports.crearservicio = async (req,res) => {
  const obj=req.body;
  const response = await servicio.create(obj);
  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"servicio creado exitosamente",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error creando servicio",
  })
}
};

exports.borrarservicio = async (req,res) => {
  id=req.params.id;
  const response = await servicio.destroy({
    where: {
      idServicio:id
    }
  });  

  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"servicio Borrado",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error borrando servicio",
  })
}
};

exports.actualizarservicio = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const response = await servicio.update(body, {
    where: {
      idServicio: id,
    },
  });

  if (response) {
    res.status(200).json({
      statusCode: 200,
      data: null,
      message: "servicio modificado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "Ocurrio un error modificando servicio",
    });
  }
};