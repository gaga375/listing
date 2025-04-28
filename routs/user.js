const express = require("express");
const router = express.Router();
let monurl = "mongodb://127.0.0.1:27017/test";
const wrapasync = require("../uitels/wrapasync");
const passport = require("passport");
const { savdurl } = require("../middleware.js");
const controlers = require("../controlers/user.js")

// sign up

router
.route("/")
.get(controlers.signuppage)
.post(wrapasync(controlers.signup)
);

// login

router
.route("/login")
.get(wrapasync( controlers.loginpage))
.post(passport.authenticate("local",{failureRedirect:"/signup/login", failureFlash:true}),wrapasync( controlers.login))

// logout 

router
.route("/logout")
.get(controlers.logout);



    module.exports = router