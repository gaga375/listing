const express = require("express");
const router = express.Router();
require('dotenv').config();
const{islogin,isowner,validation}= require("../middleware.js")
const controlers = require("../controlers/listing.js")
let wrapasync = require("../uitels/wrapasync.js");
const multer  = require('multer');
const {storage}= require("../cloudConfig.js");
const upload = multer({ storage });

// routs start

router
.route("/listing/new")
.get( wrapasync(controlers.newlisting));

 
router
.route("/home")
.get(controlers.home);

router
.route("/new")
.get(islogin,controlers.new2);

router
.route("/:id/new")
.get(islogin,isowner,wrapasync(controlers.update )
);

router
.route("/")
.get(wrapasync(controlers.index))
.post(islogin,upload.single('listing[image]'),validation, wrapasync(controlers.create))



router
.route("/:id")
.get(wrapasync( controlers.show))
.put(islogin,isowner,upload.single('listing[image]'),validation,wrapasync(controlers.updatepost))
.delete(islogin, isowner, wrapasync (controlers.delete)
);







   module.exports = router;
