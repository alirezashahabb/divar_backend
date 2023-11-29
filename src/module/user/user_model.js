
const { Schema, model } = require("mongoose");

const OTPSchema = new Schema({
            code : {type : String , require : false , default : undefined},
            expiresIn : {
                type : Number  , require : false , default : 0
            }
},
)

const UserSchema = new Schema(
    {

    fullName : {type : String , require : false , },
    mobile : {
        type : String  , unique : true , require : true , 
    },

    otp : {
                OTPSchema,
    },
    vrefirdMobile : {
        type : Boolean , default : false , require : true , 
    },

    

},
{timestamps : true},
)

const userModel = model("user" , UserSchema);

module.exports = {
    userModel
};
