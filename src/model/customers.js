const mongoose = require('mongoose')
// const validator = require('validator')

const customers = mongoose.model('customers', {
    _id: {type:Number },
    name: {type: String},
    order: { type: String}
})

module.exports  = customers;