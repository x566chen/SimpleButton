const express = require('express');
const app = express();
const PORT = 3000;
let listName = ['a', 'b','c'];
const cors = require('cors');

var webpack = require('webpack'),
    WebpackDevMiddleware = require('webpack-dev-middleware'),
    WebpackHotMiddleware = require('webpack-hot-middleware')
var webpackDevConfig = require('../webpack.config');

var compiler = webpack(webpackDevConfig);

// attach to the compiler & the server
app.use(WebpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  stats: { colors: true }
}))
app.use(WebpackHotMiddleware(compiler))
app.use(cors());
app.use(express.json());

// set the view engine to ejs

app.set('view engine', 'ejs');
// home page
app.get('/elements', (req, res) => {
  // render `home.ejs`
res.status(200).json({listName})
});

app.post('/elements', (req, res) => {
listName.push(req.body.newElement);
res.status(200).json({listName})
});

app.put('/elements/:id', (req, res) => {
  listName.push(req.params.id);
  res.status(200).json({listName})
});

app.delete('/elements/:id', (req, res) => {
  listName = listName.filter(ele=>ele!=req.params.id);
  res.status(200).json({listName})
});

// start express app on port 3000

app.listen(PORT, () => {

  console.log(`Listening on port ${PORT}`);

});
