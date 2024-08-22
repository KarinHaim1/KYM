const express = require('express');
const router = express.Router();
const {createToken,verify} = require('../auth');

const resolve = (res,err)=>{
  res.status(500).json({err:'internal server error'});
  console.log(err);
}


router.post('/authentication',async(req,res)=>{
try{
  const token = createToken(req.body);
  res.json({
      token});
}catch (err){
  resolve (res,err);
}
});

router.post('/validate',async(req,res)=>{
  try{
    const {token} = req.body;
    const result = verify(token);
    res.json(result);
    res.json({
        token});
  }catch (err){
  res.status(401).json({error:'invalid token'})  }
  
});

module.exports = router;