const express = require("express");
const cors= require("cors");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const port = 3000


db.miconexion.sync();

app.use(bodyParser());
app.use(cors());


require("./routes/cliente.routes")(app);
require("./routes/mecanico.routes")(app);
require("./routes/servicio.routes")(app);
require("./routes/ejecucion.routes")(app);


// habilita el puerto 3000 , para escuchar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})