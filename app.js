const express = require('express');
const app = express();

//MI PRIMERA APLICACION 
/*app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>');
}); */

//EL CODIGO SECRETO 
/* app.get('/', (req, res) => {
  res.send('<h1>HcUy6Re2LLBRtj</h1>');
}); */

//SALUDAME 1 
/* app.get('/', (req, res) => {
  var validacion = req.query.nombre;
  if (!validacion) {
  validacion = "desconocido"
  }
  res.send("<h1>Hola " + validacion +"!</h1>");
}); */

//SALUDAME 2
/* app.get("/makers/:name", (req, res) => {
  let name = req.params.name;
  name = name.replace(/^\w/, c => c.toUpperCase());

  res.send(`<h1>Hola ${name}!</h1>`);
});*/

//EJERCICIO PAR E IMPAR//
/*app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
  const texts = [];
  for (let i = 1; i <=50; i++) {
    texts.push(`${i} Soy ${(i % 2 == 0 ? "Par" : "Impar")}!`)    
  }
 res.render("index", {texts:texts});
}); */

//EJERICICIO SALUDAME-3
/*
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.set('views', 'views');

app.get("/", (req, res) => {
    res.render('index');
});

app.post("/", (req, res) => {
  res.send('<h1>Hola '+ req.body.name + '!</h1>');
}); */

//EJERCICIO ENCABEZADOS


app.get("/", (req, res) => {
  res.send(req.get('User-Agent'));
});


app.listen(3000, () => console.log('Listening on port 3000!'));
