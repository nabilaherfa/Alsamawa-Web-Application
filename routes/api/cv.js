const express = require('express')
const router = express.Router()

// Item Model
const CV = require('../../models/CV');

// @route   GET api/cv
// @desc    GET All CV
// @access  Public
router.get('/', (req,res) => {
    CV.find()
        .then(cv => res.json(cv))
})

// @route   POST api/cv
// @desc    Create a CV
// @access  Public
router.post('/', (req,res) => {
    const newCV = new CV({
        personal_data : {
            fullname : req.body.fullname,
            nickname : req.body.nickname
        },
        physics_desc : {
            height : req.body.height,
            weight : req.body.weight,
            hair_color : req.body.hair_color
        }
    });

    newCV.save().then(cv => res.json(cv));
});

// @route   DELETE api/cv/:id
// @desc    Delete a CV
// @access  Public
router.delete('/:id', (req,res) => {
        CV.findById(req.params.id)
            .then(cv => cv.remove().then(() => res.json({success : true})))
            .catch(err => res.status(404).json({success: false}))
});

module.exports = router;