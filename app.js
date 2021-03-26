const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var validacion = req.params.nombre; 
  validacion = validacion.replace(/^\w/, c => c.toUpperCase());
    res.send("<h1>Hola " + validacion +"!</h1>");
});
app.listen(3000, () => console.log('Listening on port 3000!'));
