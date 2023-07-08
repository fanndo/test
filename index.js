const express = require('express')
const app = express()
const port = 3000

const productRoute = require('./src/routes/products');

app.use(express.json());

app.use('/', express.static(__dirname + '/public'));

// routes
app.use('/products', productRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})