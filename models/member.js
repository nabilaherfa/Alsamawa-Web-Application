const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MemberSchema  = new Schema({
    username : { type: String, required: true, unique: true},
    password : { type: String, required: true},
}, {collection : 'members'})

module.exports = Member = mongoose.model('member', MemberSchema);