//import dependencies
const express = require('express');
const morgan = require('morgan');


const PORT = 8080;

//creation of the express sever instance
const app = express();

//Middlewares
app.use(morgan('dev'));









//Start up the Votr server
app.listen(PORT, () => {
  console.log('The Votr server is ready to receive request.');
});