const express = require('express');
const app = express();

app.get('/?nombre=Juan', (req, res) => {
  res.send(req.query.name ? "<h1>Hola " + req.query.name + "!</h1>" : "<h1>Hola desconocido!</h1>")  
});

app.listen(3000, () => console.log('Listening on port 3000!'));
