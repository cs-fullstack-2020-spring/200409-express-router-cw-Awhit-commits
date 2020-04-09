const express = require('express');

const router = express.Router();


router.use(express.json())

router.get('/:id',(req,res)=>{
    res.send(`You attemped to view item ${req.params.id}`);

})

router.get('/',(req,res)=>{
    res.send(`You attemped to view all items`);

})

router.post('/:id',(req,res)=>{
    let jsonApi = {id:req.params.id,
    description:"Mock description",
price:"$9.99"}
res.send(jsonApi)


})


module.exports = router;