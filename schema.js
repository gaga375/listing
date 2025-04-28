const Joi = require('joi');
const reviews = require('./listing/models/reviews');


  module.exports.listingSchema = Joi.object({
    listing: Joi.object({
    title: Joi.string() .required(),

    description: Joi.string().required(),

    image: Joi.object({
        url: Joi.string().allow("", null),
    }).allow("", null),
    
    price: Joi.number() .min(10)  .required(),

    location: Joi.string()  .required(),

    country:Joi.string() .required(),

   

    }).required()
})




module.exports.reviewSchema = Joi.object({
  reviews: Joi.object({
comment:Joi.string().required(),

rating: Joi.number().min(1).max(5).required(),
}).required(),
 })
