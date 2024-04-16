const express = require('express');

const app = express();

app.use(express.json());
app.post('/users', (req, res) => {
  //res.sendStatus(200);
  const { password, username } = req.body;
  if (!password || !username) {
    res.sendStatus(400);
    return
  }
  res.send({userId: 1});
})

module.exports = app;