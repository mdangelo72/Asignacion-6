const db = require("../models");
const ejecucion = db.ejecucion;

/// Funcion para retornar todos las ejecucions


exports.obtenerAllejecucion = async (req, res) => {
  const response = await ejecucion.findAll();
  if (response !== null && response.length) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "ejecucion listadas exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontraron ejecucion",
    });
  }
};

exports.obtenerOneejecucion = async (req, res) => {
  id=req.params.id;
  const response = await ejecucion.findOne({
    where: {
      idEjecucion:id
    }
  });
  if (response !== null ) {
    res.status(200).json({
      statusCode: 200,
      data: response,
      message: "ejecucion listado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "No se encontro ejecucion",
    });
  }
};


exports.crearEjecucion = async (req,res) => {
  const obj=req.body;
  const response = await ejecucion.create(obj);
  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"ejecucion creada exitosamente",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error creando ejecucion",
  })
}
};

exports.borrarEjecucion = async (req,res) => {
  id=req.params.id;
  const response = await ejecucion.destroy({
    where: {
      idEjecucion:id
    }
  });  

  if (response != null) {
    res.status(200).json({
      statusCode:200,
      data:null,
      message:"ejecucion Borrado",
      error: null,
    });    
  } else {
    res.status(500).json({
      statusCode:500,
      data:null,
      message:null,
      error: "Ocurrio error borrando ejecucion",
  })
}
};

exports.actualizarEjecucion = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const response = await ejecucion.update(body, {
    where: {
      idEjecucion: id,
    },
  });

  if (response) {
    res.status(200).json({
      statusCode: 200,
      data: null,
      message: "ejecucion modificado exitosamente",
      error: null,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      data: null,
      message: null,
      error: "Ocurrio un error modificando ejecucion",
    });
  }
};