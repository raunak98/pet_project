const express = require('express');
const router = express.Router();
const DB = require('../utility/database')

router.get('/list', (req, res) => {
    const Candidate_list = 'SELECT cid,cname,cemail,csurname,status,outcome,possible_role,registration_date,last_change_date,cv_screening_date FROM pet_project.candidate as a join pet_project.candidate_status as b on a.sid=b.sid join pet_project.candidate_outcome as c on a.oid=c.oid join pet_project.candidate_role as d on a.rid=d.rid order by cid asc'
    DB.query(Candidate_list)
    .then(rows=> res.json(rows))
})

module.exports = router;

// DB.query('SELECT * from candidate', function (err, rows, fields) {
    
//       if (err) throw err
//       console.log(rows)
//       res.json( rows)
//   })
// })