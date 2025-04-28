let mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviews = require("./reviews.js");
 const { listingSchema } = require("../../schema");


let schema = new mongoose.Schema({
     title:{
        type:String,
        required: true,
    },
    description:{
    type:String,
    },
    

    image: {
  url: String,
  filename:String
    },

    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    reviews:[{
        type: Schema.Types.ObjectId,
        ref:"review"
    }],
   owner:{
    type : Schema.Types.ObjectId,
    ref:"user"
   },
})

schema.post("findOneAndDelete",async (listing) =>{
    if(listing){
        await reviews.deleteMany({_id: {$in: listing.reviews}})
    }
    
})

let listing = mongoose.model("listing",schema);
module.exports = listing;