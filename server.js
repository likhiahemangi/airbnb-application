const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const productModel = require("./models/roomlisting");
const Feacturedmodel = require("./models/feacturedroom");
const session = require('express-session'); 
const bcrypt = require("bcryptjs");
const authentication=require("./middleware/auth");
const dashboardLoader = require("./middleware/authorazation");



require('dotenv').config({path:"./config.env"})
const taskmodel = require("./models/task");
const adminmodel = require("./models/user");

//This allows express to make my static content avialable from the public
app.use(express.static('static'));
app.use(bodyParser.urlencoded({extended: false}))


const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_db_connection_string, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>{
  console.log("connect to moongoose databade");
})
 .catch(err=>console.log(`error in database : ${err}`));


//autorization//
 app.set('trust proxy',1)
 app.use(session({
         secret : 'keyboard cat',
         resave: false,
         saveUninitialized : true,
 
 }))

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
        products : Feacturedmodel.getallProductsroom()
    });
});

app.get("/roomlisting",(req,res)=>{

    res.render("roomlisting",{
        title: "Room Listing",
        headingInfo : "Room Listing Page",
        products : productModel.getallProducts()
    });
});

app.get("/userregistration",(req,res)=>{

        res.render("userregistration",{
            title: "User Registration",
            headingInfo : "User Registration Page",
    }); 
});

app.get("/logout",(req,res)=>{

  res.render("logout",{
      title: "Log Out",
      headingInfo : "Log Out Page",
}); 
});
app.get("/profilepage",(req,res)=>{

       taskmodel.find()
       .then((store)=>{

        const filtertask = store.map(result=>{

          return{

        FirstName : result.FirstName,
        Address: result.Address,
         PostalCode: result.PostalCode,
        phoneNo: result.phoneNo,
        email: result.email
 }
        });
        res.render("profilepage",{
          data: filtertask
   })
       })
  
    .catch(err=>console.log(`error in pulling database : ${err}`));

       });


app.get("/login",(req,res)=>{

  res.render("login",{
      title: "Login page",
      headingInfo : "Login  Page",
   });
});

app.get("/admin",(req,res)=>{

  res.render("admin",{
      title: "Admin page",
      headingInfo : "Admin  Page",
   });
});

app.get("/updateadmin",(req,res)=>{

  res.render("updateadmin",{
      title: "Admin Update page",
      headingInfo : "Admin Update Page",
   });
});

app.get("/SenddataAdmin",(req,res)=>{

  res.render("admin",{
      title: "Admin page",
      headingInfo : "Admin  Page",
   });
});
app.post("/SenddataAdmin",(req,res)=>{

  const newuseradmin = {
    title : req.body.title,
    description : req.body.description,
    Price : req.body.Price,
    priority : req.body.priority,
    status : req.body.status,
    image : req.body.image,
  } 
const taskadmin = new  adminmodel(newuseradmin) ;
taskadmin.save() 
.then(()=>{
  console.log("Admin Created ")
  res.redirect("adminedit");
})
.catch(err=>console.log(`error in pulling database : ${err}`));
});

app.get("/adminedit",(req,res)=>{

  adminmodel.find()
  .then((store)=>{

   const filtertask = store.map(result=>{

     return{
      id : result._id,
      title : result.title,
      description: result.description,
      Price: result.Price,
      priority: result.priority,
      status: result.status

     }
   });
   res.render("adminedit",{
     admindata: filtertask
})
  })

.catch(err=>console.log(`error in pulling database : ${err}`));
  });
app.get("/welcome",authentication,dashboardLoader);


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
     res.rendeer("userregistration",{
       messagesr : errors
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
        res.redirect("profilepage");
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
        res.render("profilepage");
      })
    }
    const newuser = {
         FirstName : req.body.FirstName,
         Address : req.body.Address,
         PostalCode : req.body.PostalCode,
         phoneNo : req.body.phoneNo,
        City : req.body.City,
        State : req.body.State,
         psw : req.body.psw,
         email : req.body.email

    } 
     const task = new  taskmodel(newuser) ;
     task.save() 
     .then(()=>{
       res.redirect("profilepage");
     })
     .catch(err=>console.log(`error in pulling database : ${err}`));
});

app.post("/sendLogin",(req,res)=>{
  taskmodel.findOne({email:req.body.email})
  .then(user=>{

    const errors= [];

    //email not found
    if(user==null  && errors.length>0)
    {
        errors.push("Sorry, your email and/or password incorrect");
        res.render("login",{
                   errors
        })
            
    }

    //email is found
    else
    {
        bcrypt.compare(req.body.psw, user.psw)
        .then(isMatched=>{
            
            if(isMatched)
            {
                //cretae our sessoin
                req.session.userInfo = user;
               
                res.redirect("welcome");
            }

            else
            {
                errors.push("Sorry, your email and/or password incorrect ");
                res.render("login",{
                    errors
                })
            }

        })
        .catch(err=>console.log(`Error ${err}`));
    }


})

.catch(err=>console.log(`Error ${err}`));
});
app.use((req,res,next)=>{

  res.user=req.session.userInfo;
  next();
})

//update and delete//
app.use((req,res,next)=>{

  if(req.query.method=="PUT"){
    req.method="PUT"
  }
  else if(req.query.method=="DELETE"){
    req.method="DELETE"
  }
  next();
})


app.get("/edit/:id",(req,res)=>{

  adminmodel.findById(req.params.id)
  .then((task)=>{
      const{_id,title,description,Price,priority,status} = task;
      res.render("updateadmin",{
            _id,
            title, 
            description,
            Price,
            priority,
            status
      });
  })
  .catch(err=>console.log(`error in pulling database : ${err}`));
});

app.put("/update/:id",(req,res)=>{
    
  const newuseradmin = {
    title : req.body.title,
    description : req.body.description,
    Price : req.body.Price,
    priority : req.body.priority,
    status : req.body.status,
    image : req.body.image,
  } 
       adminmodel.updateOne({_id:req.params.id},newuseradmin)
       .then(()=>{
             res.redirect("/adminedit");
       })
        .catch(err=>console.log(`error in update database : ${err}`));
});
app.delete("/delete/:id",(req,res)=>{
  adminmodel.deleteOne({_id:req.params.id})
  .then(()=>{
    res.redirect("/adminedit");
})
.catch(err=>console.log(`error in delete database : ${err}`));
});



const PORT = process.env.PORT ||  1112;
app.listen(PORT,()=>{

    console.log(`Web server is up and running`);
})

