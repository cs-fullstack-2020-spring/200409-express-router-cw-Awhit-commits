const express = require('express');

const router = express.Router();


router.use(express.json())

router.get('/:userName',(req,res)=>{
    res.send(`Welcome Back ${req.params.userName}`);

})

router.delete('/user/:id',(req,res)=>{
    res.send(`You attemped to delete the user ${req.params.id}`);

})

router.put('/user/:id',(req,res)=>{
    let jsonApi = {id:req.params.id,
    description:"Mock description",
price:"$9.99"}
res.send(jsonApi)


})


module.exports = router;