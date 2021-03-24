const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<div class="secret" style="display: none;"></div><h1> Hola Mundo HcUy6Re2LLBRtj</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
