import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) =>{
  res.send("welcome home")
})

app.listen(3000, () => {
  console.log('Express server initialized');
});
