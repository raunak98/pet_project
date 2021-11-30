const DB = require('../utility/database')

exports.register=(req,res)=>{
  const cname = req.body.cname;
  const cemail = req.body.email;
  const csurname = req.body.surname;
  const sid = parseInt(req.body.cstatus);
  const oid = parseInt(req.body.outcome);
  const rid = parseInt(req.body.role);
  
  const SqlInsert= "INSERT INTO pet_project.candidate (cname,cemail,csurname,sid,oid,rid) VALUES (?,?,?,?,?,?)";
  DB.query(SqlInsert,[cname,cemail,csurname,sid,oid,rid]).then(result=>{
    console.log("the result is ",result)
    res.status(200).json({msg:"candidate registered successfully"})
  });
}

exports.deleteCandiates=(req, res) => {
  const ids=req.body.selectedIds;  
  ids.forEach((id,index) => {
    const delete_candidates = 'DELETE FROM pet_project.candidate WHERE cid=?'
    DB.query(delete_candidates,[id]
    )
    .then(result =>{
      console.log(result)
      if(index===(ids.length-1))
      res.json("Deletion Success");
    });
  });
}

exports.getAllCandidates=(req, res) => {
  const Candidate_list = 'SELECT cid as id,cname,cemail,csurname,status,outcome,possible_role,registration_date,last_change_date,cv_screening_date FROM pet_project.candidate as a join pet_project.candidate_status as b on a.sid=b.sid join pet_project.candidate_outcome as c on a.oid=c.oid join pet_project.candidate_role as d on a.rid=d.rid order by cid asc'
  DB.query(Candidate_list)
  .then(rows=> res.json(rows))
}