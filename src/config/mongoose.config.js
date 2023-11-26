 const {default : mongoose} =  require('mongoose');
 const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log('conectted');
}).catch(err=>{
    console.log(err?.message ?? 'filed db connect');
})