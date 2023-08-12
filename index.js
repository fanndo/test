const express = require('express')
const app = express()
const port = 3000

const productRoute = require('./src/routes/products');
const categoryRoute  = require('./src/routes/categories');


app.use(express.json());

app.use('/', express.static(__dirname + '/public'));

// routes
app.use('/products', productRoute);
app.use('/categories', categoryRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`)
})