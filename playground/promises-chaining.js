require('../src/db/mongoose')
const Customers = require('../src/model/customers')

// 122

// Customers.findByIdAndUpdate('122', { order: 'Fossil Watch'}).then((customer) =>{
//     console.log(customer);
//     return Customers.countDocuments({ order: 'Fossil Watch'})
// }).then((result) =>{
//     console.log(result);
    
// }).catch((e) =>{
//    console.log(e);
   
// })

const updateOrderAndName = async (id, order) =>{
    const customers = await Customers.findByIdAndUpdate(id, {order})
    const count = await Customers.countDocuments({ order })
    return count
}

updateOrderAndName('122', 'Motorola Phone').then((count) =>{
    console.log(count);
}).catch((e) => {
    console.log(e);
    
})