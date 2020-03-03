const express = require("express");
var router=express.router()
const productModel = require("./models/roomlisting");
router.get("/roomlisting",(req,res)=>{

    res.render("roomlisting",{
        title: "Room Listing",
        headingInfo : "Room Listing Page",
        products : productModel.getallProducts()
    });
});
module.exports=router;