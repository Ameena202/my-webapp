const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Jenkins CI/CD Pipeline!');
});

app.listen(port, () => {
  console.log(`Server running at http://35.154.62.66:${port}`);
});
