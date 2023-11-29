const { AuthMessage } = require("./auth.message");
const authService = require("./auth.service");
const bind = require("auto-bind");

class AuthController{
    #service;
    constructor(){
        bind(this);
            this.#service = authService;
    }
    async sendOTP(req , res , next){
try {
    const {mobile}  =req.body;
     await this.#service.sendOTP(mobile);
    return {
        message  : AuthMessage.senOtpSuccessfully,
    }
} catch (error) {
    next();
}
    }

    async cheackOTP(req , res , next){
        try {
            
        } catch (error) {
            next();
        }
            }

            async logOut(req , res , next){
                try {
                    
                } catch (error) {
                    next();
                }
                    }
}

module.exports =  new AuthController();
