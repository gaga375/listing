let listing = require("./listing/models/listing.js");
let ExpressError = require("./uitels/ExpressError.js"); 
const {listingSchema,reviewSchema} = require("./schema.js");
const reviews = require("./listing/models/reviews.js");


module.exports.islogin = ((req, res,next)=>{
    if( ! req.isAuthenticated()){
        req.session.redirecturl = req.originalUrl;
        req.flash("error","Pleese Login befor create listing");
      return  res.render("./listing/login.ejs")
        }    next()
})

 /*module.exports.savdurl= ((req ,res, next)=>{
if(req.session.redirecturl){
   return res.locals.redirecturl = req.session.redirecturl
}
next();
}) */

module.exports.isowner= (async (req, res, next)=>{
  let {id}= req.params;
      let data = await listing.findById(id);
  if(!res.locals.curruser._id.equals(data.owner._id) ){
      req.flash("error","you not a permissin this fetured")
      return  res.redirect(`/listings/${id}`)
}
next()
})


module.exports.validation = (req,res,next)=>{
let {error} = listingSchema.validate(req.body);
if(error){
    throw new ExpressError(400,error)
}
else{
    next();
}
};

module.exports.reviewValidation = (req,res,next)=>{
  let {error} = reviewSchema.validate(req.body);
  if(error){
      throw new ExpressError(400,error)
  }
  else{
      next();
  }
  };

  module.exports.isauthor= (async (req, res, next)=>{
    let {id ,reviewsid}= req.params;
        let data = await reviews.findById(reviewsid);
    if(!res.locals.curruser._id.equals(data.author._id) ){
  req.flash("error","you not a permissin this fetured")
   return  res.redirect(`/listings/${id}`)
 }
next()
  })
  
  