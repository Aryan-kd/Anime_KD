import express from 'express';

const PORT = process.env.PORT || 5400;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, (req, res) => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
