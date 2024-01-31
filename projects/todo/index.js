const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

let data = ["go to class"]

// this is for setting the body parser for getting data from a form
app.use(bodyparser.urlencoded({ extended: true }));

// this is for setting the template
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) =>{
  res.render('index')
})

app.get('/todo', (req, res)=>{
  data.forEach((val)=>{console.log(val)})
  res.render('todo', {"data": data})
})

app.post('/todo', (req, res)=>{
  data.push(req.body.item)
  res.redirect('/todo')
})

app.listen(3000, () =>{
  console.log('listening to port 3000')
})
