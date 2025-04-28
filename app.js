require("dotenv").config(); // Add this line at the top of app.js

const express = require("express");
const app = express();
 const mongoose = require("mongoose");;
const port = 8080;
const listings = require("./routs/listings.js")
const review = require("./routs/review.js")
const User = require("./routs/user.js")
let path = require("path");
const mongostore = require("connect-mongo");
let  monurl = "mongodb://127.0.0.1:27017/test";
 let atlerurl = process.env.atlerurl;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
app.use(express.static(path.join(__dirname,"./public")));
let ejsmate = require("ejs-mate");
let ExpressError = require("./uitels/ExpressError.js"); 
app.engine("ejs",ejsmate);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const session = require("express-session");
const flash = require("connect-flash")
const methodOverride = require('method-override');
const { required } = require("joi");
const { error } = require("console");
const reviews = require("./listing/models/reviews.js");
app.use(methodOverride('_method'));
// authentication 
const user = require("./listing/models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");


main().catch(Error =>{
    console.log(console.log(Error));    
})


let store =mongostore.create({
    mongoUrl: atlerurl,
   crypto:{
    secret:process.env.secret
   },
   touchAfter: 24* 3600
  });

  
const sessionoption = {
    store,
    secret:process.env.secret,
    resave:false,
    saveUninitialized : true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly:true
    }
};
  

app.use(session(sessionoption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  //  console.log("Current User:", req.user); // Debug line
    res.locals.sucess = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.curruser = req.user;
    next();
});


store.on("error",()=>{
    console.log("error in mongo session store")
});


passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.use("/listings",listings);
app.use ("/listings/:id/reviews",review);
app.use("/signup",User);

 async function main() {
    await mongoose.connect(atlerurl)
 }



app.listen(port,()=>{
    console.log("server is start",port);
});


/* err handling*/

app.all("*", ( req , res , next)=>{
next(new ExpressError(404 , "page not found"))
});

app.use((err, req, res, next) => {
   let { statusCode = 500, message = "Something went wrong!" } = err;
   res.status(statusCode).render("./error/error.ejs",{message})
});

