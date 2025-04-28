const express = require("express");
const router = express.Router({mergeParams:true});
const{islogin,isowner,validation,isauthor}= require("../middleware.js")
const {reviewValidation} = require("../middleware.js")
 let wrapasync = require("../uitels/wrapasync.js");
 const controlers = require("../controlers/reviews.js")
 
    // reviews 
 
    router
    .route("/")
    .post(islogin, reviewValidation, wrapasync(controlers.createreview ));

 // REVIEW DELETE 
 
router
.route("/:reviewsid")
.delete(islogin,isauthor, wrapasync(controlers.deletereviews)
);

 module.exports = router;