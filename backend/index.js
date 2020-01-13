const express = require('express');
const app = express();
const PORT = 3000;
const List = ['a', 'b','c'];



// set the view engine to ejs

app.set('view engine', 'ejs');
// home page
app.get('/elements', (req, res) => {
  // render `home.ejs`
  let list = List;
  if (req.query.name){
    list= list.filter(name => name.contains.includes(req.query.name));
  }
  res.render('home', {List, name: list});

});

app.get('/elements/:id', (req, res) => {
  // render `home.ejs`
  let list = List;
  if (req.query.name)list= list.filter(name => name.contains.includes(req.query.name));
  res.render('home', {List, name: list});

});

app.put('/elements/:id', (req, res) => {
  // render `home.ejs`
  let list = List;
  if (req.query.name)list= list.filter(name => name.contains.includes(req.query.name));
  res.render('home', {List, name: list});

});



// start express app on port 3000

app.listen(PORT, () => {

  console.log(`Listening on port ${PORT}`);

});



app.use('/static', express.static('static'));