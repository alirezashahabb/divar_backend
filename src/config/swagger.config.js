const swaggerdocsJs = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");

function swaggerConfig(app){
    const swaggerDocument = swaggerdocsJs({
        swaggerDefinition : {
            openapi:"3.0.1",
            info : {
                title : "Divar_Backend" , 
                description : "This is for Divar_backend" , 
                version : '1.0.0'
            }
        },
        apis : [process.cwd() + '/src/module/**/*.swagger.js'],
    },
    )
    
        const  swagger =  swaggerui.setup(swaggerDocument);
       app.use('/' , swaggerui.serve , swagger );
    
}


 
 
   module.exports = {
swaggerConfig,
 };
 