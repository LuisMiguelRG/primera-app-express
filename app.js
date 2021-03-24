const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(validacion)  
});
var validacion = req.query.name; 
  if (validacion == " ") {
    "<h1> Hola Desconocido</h1>"
  }else{
    "<h1> Hola </h1>" + validacion
  }

app.listen(3000, () => console.log('Listening on port 3000!'));
