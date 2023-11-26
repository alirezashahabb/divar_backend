const authService = require("./auth.service");

class AuthController{
    #service;
    constructor(){
            this.#service = authService;
    }
    async sendOTP(req , res , next){
try {
    
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
