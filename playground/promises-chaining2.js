require('../src/db/mongoose')
const LoginDetails = require('../src/model/details')

// LoginDetails.findByIdAndDelete('4').then((logindetails) =>{
//     console.log(logindetails)
//     return LoginDetails.countDocuments({completed: false})
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)    
// })

const deleteLoginDetailsAndCount = async(id) =>{
    const logindetails = await LoginDetails.findByIdAndDelete(id)
    const count = await LoginDetails.countDocuments({completed: false})
    return count
}

deleteLoginDetailsAndCount('6').then((count) =>{
    console.log(count);
}).catch((e) =>{
    console.log(e);
    
})