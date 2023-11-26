const{Router} = require("express");
const authControll = require("./auth.controll");
const router = Router();
router.post('/send-otp' , authControll.sendOTP);
router.post('/cheack-otp' , authControll.cheackOTP);  


module.exports = {
    AuthRouter : router,
};
