const bind = require("auto-bind");
const { userModel } = require("../user/user_model");
const createHttpError = require("http-errors");
const { AuthMessage } = require("./auth.message");
const {randomInt} = require("crypto");

class AuthService{
        #model;
        constructor(){
                bind(this);
                this.#model = userModel;
        }
    async sendOTP(mobile){
     const user =  await userModel.findOne({mobile})
        const now = new Date().getTime;
        const otp ={
                code : randomInt(10000 , 99999),
                expiresIn : now + (1000*60*2),

        }
        if(!user){
                const newUser = await this.#model.create({
                                mobile , 
                                otp,
                })
                return newUser;
        }
                if(user.otp && user.otp.expiresIn> now){
                        throw new createHttpError.BadRequest(AuthMessage.otpCodeExpire);
                }

               
   
                user.otp = otp;
                await user.save();

                return user;

              
             
        
        }
            ///
        
            async cheackOTP(mobile , code){
             
                    }
        /// this metho for exist moble number 
        async CheackExistmobile(mobile){
                const user =  await userModel.findOne({
                        mobile
                })
                if(!user) throw  new createHttpError.NotFound(AuthMessage.userNotFound)
                return user;
        }
}

module.exports = new AuthService();
   