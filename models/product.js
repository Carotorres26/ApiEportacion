const {model, Schema} = require('mongoose')

const ProductSchema = new Schema({
    nameProduct: {
        type: String,
        required:[true, 'The field names is required'],
        minLength :[3, 'Min 3 characters'],
    },
    price: {
        type: Number,
        required:[true, 'The field price is required'],
    },
    weight:{
        type: Number,
        required:[true, 'The field weight is required'],
    }
},{
versionKey:false
}) 

module.exports = model('Prduct',ProductSchema,'product')//primero define la clase, el segundo al nombre de la esquema, tercero nombre de la collection