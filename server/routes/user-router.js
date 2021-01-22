const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/login', UserCtrl.logUserIn)
router.get('/checkLoggedIn', UserCtrl.checkLoggedIn)
router.post('/logout', UserCtrl.logUserOut)


module.exports = router