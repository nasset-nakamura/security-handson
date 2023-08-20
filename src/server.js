const express = require('express');
const api = require('./routes/api');

const app = express();
const port = 4000;

app.use(express.static('src/public'));
app.use('/api', api);

app.get('/', (_, res) => {
  res.end('Top Page');
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
