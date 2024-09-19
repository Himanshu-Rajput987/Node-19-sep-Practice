const express = require('express');
const studentcontroller = require('../controller/studentcontroller');
const router = express.Router();
router.use(express.json());

router.post('/add/student', (req, res)=>{
    studentcontroller.addStudent(req, res);
})

module.exports = router;