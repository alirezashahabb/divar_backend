const express = require('express');

const dotenv = require("dotenv");
const { swaggerConfig } = require('./src/config/swagger.config');
const { mainRouter } = require('./src/app.routes');
const { json } = require('stream/consumers');

dotenv.config();

async function mani(){
    const app = express();
    const port = process.env.PORT
        require("./src/config/mongoose.config");
       app.use(express.json())
       app.use(express.urlencoded({
        extended : true,
       }))

        swaggerConfig(app);
        app.use(mainRouter)
    app.listen(3000 , ()=>{
      
        console.log(`server run on port 3000 : http://localhost:${port}`);
    })
}

mani();
