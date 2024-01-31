const express = require('express');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.get('/', (req, res) =>{
  res.render('index')
})

app.listen(3000, () =>{
  console.log('listening to port 3000')
})
