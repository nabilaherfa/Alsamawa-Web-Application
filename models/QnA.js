const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QnASchema  = new Schema({
    question : {
        type : String,
    }, 
    answer : {
        type : String,
        default : null
    } 
})

module.exports = QnA = mongoose.model('qna', QnASchema);