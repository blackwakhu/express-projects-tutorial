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

// css and js in external files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) =>{
  res.render('index')
})

app.get('/todo', (req, res)=>{
  res.render('todo', {"data": data})
})

app.post('/todo', (req, res)=>{
  if (data.includes(req.body.item)){
  }else{
    data.push(req.body.item)
  }
  res.redirect('/todo')
})

app.get("/todo/:item", (req, res)=>{
  data.splice(req.params.item, 1);
  res.redirect('/todo')
})

app.post("/todo/:item", (req, res)=>{
  data[req.params.item] = req.body.change;
  res.redirect('/todo')
})

app.listen(3000, () =>{
  console.log('listening to port 3000')
})
