const express = require('express');
var mongoose = require("mongoose");
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

/**
app.get("/", (req, res) => {
  res.send(req.get('User-Agent'));
}); */


//EJERCICIO VISITANTES 
/**  
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/compressors=disabled&gssapiServiceName=mongodb', { useNewUrlParser: true });
const VisitorSchema = new mongoose.Schema({
  name: { type: String },
  date: { type: Date, default: Date.now }
});
const Visitor = mongoose.model("Visitor", VisitorSchema);
app.get("/", async (req, res) => {
  const visitor = new Visitor({ name: req.query.name || "Anónimo" });
  await visitor.save()

  res.send("<h1>El visitante fue almacenado con éxito.</h1>")
});
 */

//EJERCICIO VISITANTES RECURRENTES
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/compressors=disabled&gssapiServiceName=mongodb', { useNewUrlParser: true });
const VisitorSchema = new mongoose.Schema({
  name: { type: String },
  count: { type: Number, default: 0 }
});
app.set('view engine', 'pug');
app.set('views', 'views');

const Visitor = mongoose.model("Visitor", VisitorSchema);
app.get("/", async (req, res) =>{
  const name = "pedro"; //req.query.name;
  
  let visitor;
  if (!name || name.trim().length === 0) {
    visitor = new Visitor({name: "Anonimo", count: 1}); 
  } else {
    visitor = await Visitor.findOne({name: name});
    console.log("Visitor: ", visitor);
    if (!visitor) {
      visitor = new Visitor({name: name, count: 1}); 
    } else {
      visitor.count += 1;
    }
  }
  await visitor.save();

  const visitors = await Visitor.find();
  res.render("index",{ visitors: visitors})
  res.send("<h1>El visitante fue almacenado con éxito.</h1>")

});


app.listen(3000, () => console.log('Listening on port 3000!'));
