const express= require('express')
const authMiddleware = require("../middlewares/authMiddleware");
const { 
    getAllUsersControler,
     getAllDoctorsController,
     changeAccountStatusController
    } = require('../controllers/adminCtrl');
const router = express.Router()

//GET METHOD || USERS
router.get('/getAllUsers',authMiddleware, getAllUsersControler)

//GET METHOD || DOCTORS
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

//POST ACCOUNT STATUS
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)

module.exports = router