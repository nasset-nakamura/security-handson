const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  const lang = req.headers["x-lang"];

  res.setHeader('X-Timestamp', Date.now());
  if (req.query.message === '') {
    res.status(400);
    if (lang === 'en') {
      res.send({ message: 'message is empty' });
    } else {
      res.send({ message: 'messageの値が空です' });
    }
  }
  res.send({ message: req.query.message });
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log('=== post ===');
  console.log(body);
  res.end();
});

module.exports = router;
