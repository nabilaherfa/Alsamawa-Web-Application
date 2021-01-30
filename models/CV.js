const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CVSchema  = new Schema({
    personal_data : {
        fullname : {
            type: String,
            required: true
        },
        nickname : {
            type: String,
            required: true
        },
        gender : {
            type: String,
            required: true
        },
        DOB : {
            type: Date,
            required: true
        },
        POB : {
            type: String,
            required: true
        },
        proffesion : {
            type : String,
            required : true
        },
        address_of_origin : {
            type : String,
            required : true
        },
        current_address : {
            type : String,
            required : true
        },
        marital_status : {
            type : String,
            required : true
        },
        tribe : {
            type : String,
            required : true
        },
        phone_number : {
            type : String,
            required : true
        },
        instagram_account : {
            type : String,
            required : true
        },
        facebook_account : {
            type : String,
            required : true
        },
        twitter_Account : {
            type : String,
            required : true
        },
        personal_blog : {
            type : String,
            required : true
        }
    },
    physics_desc : {
        height : {
            type : Number,
            required : true
        },
        weight : {
            type : Number,
            required : true
        },
        hair_color : {
            type : String,
            required : true
        },
        eye_color : {
            type : String,
            required : true
        },
        physical_disability : {
            type : String,
            default : null
        },
        history_of_disease : {
            type : String,
            default : null
        }
    },
    edu_background : {
        SD : {
            name : {
                type : String,
                default : null
            },
            gradu_year : {
                type : Number,
                default : null
            }
        },
        SMP : {
            name : {
                type : String,
                default : null
            },
            gradu_year : {
                type : Number,
                default : null
            }
        },
        SMA : {
            name : {
                type : String,
                default : null
            },
            gradu_year : {
                type : Number,
                default : null
            }
        },
        PT : {
            name : {
                type : String,
                default : null
            },
            gradu_year : {
                type : Number,
                default : null
            },
            major : {
                type : String,
                default : null
            }
        }
    },
    daily_activities : {
        profession : {
            type : String,
            required : true
        },
        freetime_activities : {
            type : String,
            required : true
        },
        ibadah : {
            type : String,
            required : true
        }
    },
    family_profile : {
        father : {
            name : {
                type : String,
                required : true
            },
            profession : {
                type : String,
                default : null
            },
            stillalive : {
                type : Boolean,
                required : true
            }
        },
        mother : {
            name : {
                type : String,
                required : true
            },
            profession : {
                type : String,
                default : null
            },
            stillalive : {
                type : Boolean,
                required : true
            }
        }
    },
    criteria : {
        physical_criteria : {
            type : String,
            required : true
        },
        nonphysical_criteria : {
            type : String,
            required : true
        }
    },
    post_marriage_plans : {
        type : String,
        required : true
    }
})

module.exports = CV = mongoose.model('cv', CVSchema);