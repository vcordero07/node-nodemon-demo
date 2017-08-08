const express = require('express');
const app = express();

app.get("/", (req, res) => {
  const message = 'Hola mundo!';
  res.send(message);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
