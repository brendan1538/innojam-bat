const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { runProcess } = require('./runProcess');

const app = express();
const PORT = process.env.PORT || 1538;

app.use(bodyParser.json());

let server = app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});

app.get('/runBundle', (req, res) => {
  runProcess(req.query.bundle);
  res.status(200).send('completed');
});

app.post('/createBundle', (req, res) => {
  bundles = { ...bundles, ...req.body };
  res.send(bundles);
});
