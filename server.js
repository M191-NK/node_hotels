const express = require('express')
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const MenuItemRoutes = require('./routes/MenuItemRoutes');
app.use('/MenuItem',MenuItemRoutes);


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})
function newFunction() {
  return require('./db');
}

