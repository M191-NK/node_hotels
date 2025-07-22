const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const MenuItemRoutes = require('./routes/MenuItemRoutes');
app.use('/MenuItem',MenuItemRoutes);


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);



app.listen(PORT,()=>{
    console.log('listening on port 3000');
})
function newFunction() {
  return require('./db');
}

