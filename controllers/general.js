/*const express = require("express");
var router=express.router()
router.get("/",(req,res)=>{

    res.render('home',{
        title: "Home",
        headingInfo : "Home Page",
        randomContent: "Home Page"
    });
});

router.get("/home", (req,res) =>{
    res.render('home',{
        title:"Home",
        products : productModel.getallProducts()
    });
});
router.get("/userregistration",(req,res)=>{

    res.render("userregistration",{
        title: "User Registration",
        headingInfo : "User Registration Page",
}); 
});
router.get("/userdashboard",(req,res)=>{

res.render("userdashboard",{
  title: "User Dashboard",
  headingInfo : "User Dashboard" 
}); 
});
router.get("/login",(req,res)=>{

res.render("login",{
  title: "Login page",
  headingInfo : "Login  Page",
});
});

router.get("/sendMessage",(req,res)=>{

res.render("userregistration",{
  title: "Login page",
  headingInfo : "Login  Page",
});
});

router.post("/sendMessage",(req,res)=>{

const errors= [];

if(req.body.FirstName =="")
{
  errors.push("Sorry, you must enter a Name");
}
if(req.body.Address =="")
{
  errors.push("Sorry, you must enter an Address");
}
if(req.body.PostalCode =="")
{
  errors.push("Sorry, you must enter a Postal Code");
}
if(req.body.City =="")
{
  errors.push("Sorry, you must enter a City");
}
if(req.body.State =="")
{
  errors.push("Sorry, you must enter a State");
}
if(req.body.phoneNo =="")
{
 errors.push("Sorry, you must enter a phone number");
}
else if(req.body.phoneNo.length<10)
{
errors.push("Sorry, Your Phone Number is INVALID ");
}
if(req.body.email =="")
{
 errors.push("Sorry, you must enter an  E-mail")
}
if(req.body.psw =="")
{
errors.push("Sorry, you must enter a  Password")
}
if(errors.length > 0)
{
 console.log(errors);
 res.render("userregistration",{
   messages : errors
 })
}
else
{
 const accountSid = process.env.TWILIO_AUTHID;
 const authToken = process.env.TWILIO_TOKEN;
 const client = require('twilio')(accountSid, authToken);
 const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'likhiahemangi@gmail.com',
    from: 'test@example.com',
    subject: 'Welcome to Airbnb',
    text: 'and easy to do anywhere, even with Airbnb',
  };
  sgMail.send(msg)
  .then(()=>{
    res.redirect("userdashboard");
  })
  .catch((err)=>{
    console.log(err);
  }),
 
 client.messages
  .create({
     body: `${req.body.FirstName} Address : ${req.body.Address} City :${req.body.City}`,
     from: '+16036051628',
     to: `${req.body.phoneNo}`
   })
  .then(message => {
    console.log(message.sid);
    res.render("userdashboard");
  })

}

});
router.post("/sendLogin",(req,res)=>{

const errors= [];

if(req.body.uname =="")
{
errors.push("Sorry, you must enter a User Name");
}
if(req.body.psw =="")
{
errors.push("Sorry, you must enter a Password");
}
else if(req.body.psw.length<4)
{
errors.push("Sorry, you must enter a Password at least 8 characters ");
}
if(errors.length > 0)
{
console.log(errors);
res.render("login",{
 messages : errors
})
}
});
module.exports=router;*/