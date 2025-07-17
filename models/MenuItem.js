const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    taste:{
        type: String,
        enum: ['spicy','sour','salty','sweet'],
        required: true
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingriedients:{
        type: [String],
        default: []
    },
    num_sales:{
        type: Number,
        default: 0
    }
});
const MenuItem = mongoose.model('MenuItem',MenuItemSchema);
module.exports=MenuItem;