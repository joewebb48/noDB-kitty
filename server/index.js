const express = require('express');
const bodyParser = require('body-parser');
const kk = require('./controller');

const app = express();

app.use(bodyParser.json());

app.get('/api/name', kk.getName);
app.post('/api/name', kk.addName);
// app.put('./api/name', kk.updateName);
// app.delete('./api/name/:id', kk.deleteName);

app.listen(7685, () => {
  console.log('listening on 7685');
});
