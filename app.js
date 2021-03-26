const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var validacion = req.params.nombre; 
  validacion = validacion.charAt(0).toUpperCase() + string.slice(1);
    res.send("<h1>Hola " + validacion +"!</h1>");
});
app.listen(3000, () => console.log('Listening on port 3000!'));
