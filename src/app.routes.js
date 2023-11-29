const { Router } = require("express");
const {AuthRouter} = require("./module/auth/auth.routes");

const mainRouter = Router();

mainRouter.get('./auth' , AuthRouter);

module.exports = {
    mainRouter,
};
