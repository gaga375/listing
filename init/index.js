const mongoose = require("mongoose");

let monurl = "mongodb://127.0.0.1:27017/test"
let listing = require("../listing/models/listing.js");
let data = require("./data.js");

main().then(()=>{
    console.log("ho gya gagan");
})

main().catch(Error =>{
    console.log(console.log(error));
    
})


async function main() {
   await mongoose.connect(monurl) ;
}
async function initdata(){
    await listing.deleteMany({});
    data.data = data.data.map((obj)=>({
        ...obj,
        owner:"67fcb03000950ea8d9e5acc1",
    }));
    await listing.insertMany(data.data);
    console.log("data save")
}
initdata();
