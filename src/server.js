const express = require('express');
const app = express();
const port = 4000;

app.get('/', (_, res) => {
  res.end('Top Page');
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
