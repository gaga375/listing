
const user = require("../listing/models/user.js");
module.exports.signuppage = async (req ,res)=>{
    res.render("listing/signup.ejs")
    };

    module.exports.signup =  async (req , res)=>{
          try{
            let {username,email,password} = req.body;
            let fakeuser = new user({ email , username });
            newfake =  await user.register(fakeuser,password)
          req.login(newfake,(err)=>{
            if( err){
          return next(err)
            }
          req.flash("sucess","you login sucessfully")
          res.redirect("listings")
          });
          }catch(e){
            req.flash("error",e.message)
            res.redirect("/signup")
          }
        };

        module.exports.loginpage = async (req, res)=>{
            res.render("listing/login.ejs")
        };

        module.exports.login = async (req, res)=>{
            try{
             let {username,password} = req.body;
             req.flash("sucess","you are sucessfully login")
             res.redirect("/listings")}
           
             catch(e){
               req.flash("error",e.message)
               res.redirect("/login")
             }
           };

           module.exports.logout = async (req,res,next)=>{
            req.logOut((err)=>{
              if( err){
            return next(err)
              }
            })
            req.flash("sucess","you logout sucessfully")
            res.redirect("/listings")
            
            }