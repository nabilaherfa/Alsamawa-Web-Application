const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const member = require('../../models/member')

// @route   POST api/cv
// @desc    Create a CV
// @access  Public
router.post('/', async (req,res) => {
    console.log(req.body)

    const {username, email, password: plainTextPassword} = req.body
    const password = await bcrypt.hash(password, 10)

    try {
        const response = await member.create({
            username,
            email,
            password
        })
        console.log('Member created succesfully : ', response)
    } catch(error){
        console.log(JSON.stringify(error))
        return res.json({ status : 'error' })
    }
    // newCV.save().then(cv => res.json(cv));
});

module.exports = router;