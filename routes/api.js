const express = require('express');
//Importing the router from the express module
const router = express.Router();

//Utitlzing the json method from express
router.use(express.json())

//Defining the get request at a specific ID

router.get('/:id',(req,res)=>{
    res.send(`You attemped to view item ${req.params.id}`);

})

//Defining the get request that shows all items

router.get('/',(req,res)=>{
    res.send(`You attemped to view all items`);

})
//Defining Post that creates a json object
router.post('/:id',(req,res)=>{
    let jsonApi = {id:req.params.id,
    description:"Mock description",
price:"$9.99"}
// this should be coming from postman
res.send(jsonApi)


})


module.exports = router;