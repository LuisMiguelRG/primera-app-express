const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(validacion)  
});
var validacion = req.query.name; 
  if (req.query.name == " ") {
    "<h1> Hola Desconocido</h1>"
  }else{
    "<h1> Hola </h1>" + req.query.name
  }

app.listen(3000, () => console.log('Listening on port 3000!'));
