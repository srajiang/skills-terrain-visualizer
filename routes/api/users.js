const express =  require('express');
const router = express.Router();

const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

// -------------------------------------- SIGN UP
router.post('/signup', (req, res) => {

})


// -------------------------------------- SIGN IN
router.post('/login', (req, res) => {

})


module.exports = router;