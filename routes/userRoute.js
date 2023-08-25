const { register, login, findMe } = require("../controllers/userController");
const passportJWT = require("../middlewares/passportJWT")();

const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/findme", passportJWT.authenticate(), findMe)

module.exports = userRouter;