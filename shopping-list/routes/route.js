const express = require('express');
const router = express.Router();

router.get('/items',(req, res, next)=>{
    res.send('Retrieving the shopping list');
});

router.post('/item',(req, res, next)=>{

})

router.delete('/item/:id',(req, res, next)=>{
    
});

module.exports = router;