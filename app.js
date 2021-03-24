const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<div class="secret" style="display: none;">HcUy6Re2LLBRtj</div>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
