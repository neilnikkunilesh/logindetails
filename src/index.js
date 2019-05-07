const express = require('express')
require('./db/mongoose')
const LoginDetails =require('./model/details')
const customers = require('./model/customer')

const app = express()
const port = process.env.PORT || 3000 

// It's going to automatically pass incoming json to an
// object so we can access it in out request handlers.
app.use(express.json());

app.post('/users', (req, res) => {
    
    const details = new logindetails(req.body)

    details.save().then(() =>{
        res.status(201).send(details)
    }).catch((error) =>{
        res.status(400).send(error)
        
    })
});

app.post('/order', (req, res) => {
    const order = new customers(res.body)

    order.save().then(() =>{
            res.send(order);
    }).catch((e) =>{
        res.status(400).send(e);
    })
});

// Featching Data
app.get('/logindata', (req, res) => {
    LoginDetails.find({}).then((logindetails) =>{
        res.send(logindetails);
    }).catch((e) =>{
        res.status(500).send();
    })
});

// Create an endpoint for fetching a task by its id
app.get('/logindata/:id', (req, res) => {
    const _id = req.params.id

    LoginDetails.findById(_id).then((logindetails) =>{
        if(!logindetails){
            return res.status(404).send();
        }

        res.send(logindetails);
    }).catch((e) =>{
        res.status(500).send();
    })

});


app.listen(port, () => {
    console.log(`Server started on port`);
});