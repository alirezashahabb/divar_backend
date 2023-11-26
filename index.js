const express = require('express');

const dotenv = require("dotenv");
const { swaggerConfig } = require('./src/config/swagger.config');

dotenv.config();

async function mani(){
    const app = express();
    const port = process.env.PORT
        require("./src/config/mongoose.config");
        swaggerConfig(app);
    app.listen(3000 , ()=>{
      
        console.log(`server run on port 3000 : http://localhost:${port}`);
    })
}

mani();


