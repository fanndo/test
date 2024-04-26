const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express()
const port = 3000



const productRoute = require('./src/routes/products');
const categoryRoute  = require('./src/routes/categories');


app.use(express.json());



// routes
app.use('/products', productRoute);
app.use('/categories', categoryRoute);


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
// app.use('/', express.static(__dirname + '/public'));
app.use('/',swaggerUi.serve, swaggerUi.setup(openapiSpecification))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`)
})