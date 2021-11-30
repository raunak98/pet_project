const express = require('express');
const router = express.Router();
const DB = require('../utility/database')
const candidateController = require("../controllers/candidate")

router.get('/getAllCandidates', candidateController.getAllCandidates);

router.use('/deleteCandidates', candidateController.deleteCandiates);

router.use("/registerCandidate",candidateController.register);

module.exports = router;