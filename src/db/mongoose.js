const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/login', { 
    useNewUrlParser: true,
    useCreateIndex: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function( ){
    console.log('Connection Created');
    
})














// const details = mongoose.model('details', {
//     description: {
//         type: String,
//     }
// })
// const details = new logindetails({
//     _id: 6,
//     name: 'Arvind Kumar',
//     email: 'arvindk@cdac.in',
//     password: 'test@123',
//     role: 'rc',
// })











// details.save().then(()=>{
//     console.log(details);
    
// }).catch((error) =>{
//     console.log('Error!', error);
    
// })
// const me = new User({
//     name: 'Nilesh',
//     age: 25
// })

// me.save().then(() =>{
//     console.log(me);
    
// }).catch((error) =>{
//     console.log('Error!', error);
    
// })

