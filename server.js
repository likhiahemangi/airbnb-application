const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')



//This allows express to make my static content avialable from the public
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: false}))


//This tells Express to set or register Handlebars as its' Template/View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/",(req,res)=>{

    res.render('home',{
        title: "Home",
        headingInfo : "Home Page",
        randomContent: "Home Page"
    });
});

app.get("/home", (req,res) =>{
    res.render('home',{
        title:"Home",
    });
});

app.get("/roomlisting",(req,res)=>{

    res.render("roomlisting",{
        title: "Room Listing",
        headingInfo : "Room Listing Page",
    });
});

app.get("/userregistration",(req,res)=>{

        res.render("userregistration",{
            title: "User Registration",
            headingInfo : "User Registration Page",
    }); 
});
app.get("/login",(req,res)=>{

  res.render("login",{
      title: "Login page",
      headingInfo : "Login  Page",
   });
});

app.get("/sendMessage",(req,res)=>{

  res.render("userregistration",{
      title: "Login page",
      headingInfo : "Login  Page",
   });
});


app.post("/sendMessage",(req,res)=>{

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
});
app.post("/sendLogin",(req,res)=>{

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
app.listen(3000,()=>{

    console.log(`Web server is up and running`);
})
