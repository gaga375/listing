let listing = require("../listing/models/listing");
const reviews = require("../listing/models/reviews.js");


module.exports.createreview = async ( req ,res,next )=>{
     let {id} = req.params;
   let listings = await listing.findById(req.params.id);
 let newreview= new reviews(req.body.reviews);
 newreview.author = req.user._id;
 listings.reviews.push(newreview);
 // let review = req.body.reviews;
       await newreview.save();
        await listings.save();
        req.flash("sucess","Review Add")
         res.redirect(`/listings/${id}`)
     };


     module.exports.deletereviews =  async (req,res)=>{
          let {id , reviewsid} = req.params;
          await listing.findByIdAndUpdate(id,{$pull:{reviews: reviewsid}});
          await reviews.findByIdAndDelete(reviewsid);
          req.flash("sucess","Review Deleted")
          res.redirect(`/listings/${id}`)
      
      }