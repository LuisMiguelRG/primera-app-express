const express = require('express');
const app = express();

app.get('?nombre=Juan', (req, res) => {
  res.send(validacion)  
});
var validacion = req.query.name; 
  if (validacion == " ") {
    "<h1> Hola desconocido!</h1>"
  }else{
    "<h1> Hola " + validacion +"!</h1>"
  }

app.listen(3000, () => console.log('Listening on port 3000!'));
