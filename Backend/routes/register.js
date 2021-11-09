const express = require('express');
const router = express.Router();
const DB = require('../utility/database')
router.post("/register",(req,res)=>{
    const cname = req.body.cname;
    const cemail = req.body.cemail;
    const SqlInsert= "INSERT INTO CANDIDATE (CNAME,CEMAIL) VALUES (?,?)";
    DB.query(SqlInsert,[cname,cemail],(err,res)=>{
      console.log(err);
    });
  });

module.exports = router;