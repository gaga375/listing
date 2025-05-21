let listing = require("../listing/models/listing");


module.exports.index =  async (req,res)=>{
    let alldata = await listing.find({});
    res.render("listing/index.ejs",{alldata});
};


module.exports.newlisting = async(req,res)=>{
    res.render("./listing/new.ejs")
};

module.exports.home= (req,res)=>{
    res.send("home page");
};

 module.exports.new2  = (req ,res,)=>{
 res.render("listing/new.ejs")
};


module.exports.show  =  async (req,res)=>{
    let {id}= req.params;
    let data = await listing.findById(id)
    .populate({
      path:"reviews",
   populate:{
      path:"author",
  },
    })
    .populate("owner");
    if(! data){
      req.flash("error","Listing Dose Not Exist");
      res.redirect("/listings");
    }
    res.render("./listing/show.ejs",{data,req})
};


module.exports.create  =  async ( req,res ,next)=>{
    let url = req.file.path;
    let filename = req.file.filename
        req.body.listing.price = Number(req.body.listing.price);
    let newlisting = new listing(req.body.listing);
    newlisting.owner = req.user;
    newlisting.image = {url,filename}
   await newlisting.save();
   req.flash("sucess","New Listing Add")
    res.redirect("/listings");
   } 

   module.exports.update = async (req , res , next)=>{
       let {id}= req.params;
       let data = await listing.findById(id);
       let orignalUrl = data.image.url;
     orignalUrl = orignalUrl.replace("/upload","/upload/w_250");

       res.render("listing/edit.ejs",{data,orignalUrl});
   
   }

   module.exports.updatepost = async (req,res , next)=>{
       let {id}= req.params;
         let newlisting=  await listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    newlisting.image = {url,filename}
    await newlisting.save();
}

           req.flash("sucess","Listing updated")
        res.redirect(`/listings/${id}`)
         }  
       

         module.exports.delete = async (req,res , next)=>{
             let {id}= req.params;
             await listing.findByIdAndDelete(id,);
             req.flash("sucess","Listing Deleted")
             res.redirect("/listings");
             }


             function toTitleCase(str) {
              return str
                .toLowerCase()
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
            }

             module.exports.search = async (req,res,next)=>{
              let search1 = req.body.search;
            let search = toTitleCase(search1)
            let newsearch = await listing.find({location:search})
            res.render("listing/search.ejs",{newsearch,search1})
             }