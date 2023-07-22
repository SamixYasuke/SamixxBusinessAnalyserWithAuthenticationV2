const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userDB = require("./userdb");
const genData = require("./dataGeneration");
require("dotenv").config();

const checkLoggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.redirect("/login");
    }
};
  
const connectDB = async()=>{
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB DataBase Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "ABCD",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs");

app.get("/", checkLoggedIn, (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  const nameOfBusiness = req.body.businessInput;
  const locationOfBusiness = `${req.body.stateInput}, ${req.body.countryInput}`;
  console.log(nameOfBusiness, locationOfBusiness);
  try {
    const result = await genData(nameOfBusiness, locationOfBusiness);
    res.render("results", {
      businessName : nameOfBusiness,
      typeOfBusiness : result.typeOfBusiness,
      industry : result.industry,
      businessExplanation: result.businessExplanation,
      imgResponse : result.imgResponse
    });
    console.log("Success");
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to generate data" });
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async(req, res)=>{
    try{
        const userPassword = req.body.userPassword;
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        const userData = new userDB({
            userName : req.body.userName,
            firstName : req.body.firstName,
            secondName : req.body.secondName,
            emailAddress : req.body.userEmail,
            Password : hashedPassword
        });
        await userData.save();
        console.log("User Saved!");
        res.redirect("/login");
    }catch(err){
        console.error(err.message);
        res.send("COULDN'T REGISTER YOU TRY AGAIN LATER");
    }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async(req, res)=>{
    try {
        const userName = req.body.userName;
        const inputtedPassword = req.body.userPassword;
        const foundUser = await userDB.findOne({userName : userName});
        if(bcrypt.compare(inputtedPassword, foundUser.Password)){
            console.log("Login Successfull!!");
            req.session.loggedIn = true;
            req.session.userID = foundUser.id;
            console.log(req.session.userID);
            res.redirect("/");
        }else{
            res.send("WRONG PASSWORD!!!");
        }
    }catch(err){
        console.error(err.message);
    } 
});

app.get("/profile", checkLoggedIn, async (req, res)=>{
  try{
    const getUserById = await userDB.findById(req.session.userID);
    const userName = getUserById.userName;
    const name = `${getUserById.firstName} ${getUserById.secondName}`;
    const email = getUserById.emailAddress;
    const dateJoined = getUserById.createdAt;
    res.render("profile", {
      userName,
      name,
      email,
      dateJoined
    });
  }catch(err){
    console.error(err.message);
  }

});

app.get("/logout", (req, res) => {
  req.session.loggedIn = false; // Set loggedIn to false
  req.session.userID = null; // Clear the userID
  res.redirect("/login"); // Redirect to the login page or any other desired page
});

app.get("/result", (req, res)=>{
  res.render("results")
});

app.get("/contact", checkLoggedIn, async(req, res)=>{
  try{
    const userData = await userDB.findById(req.session.userID);
    res.render("contact", {
      userName : `${userData.firstName} ${userData.secondName} `,
      userEmail : userData.emailAddress
    });
  }catch(err){
    console.error(err.message);
  }
});

const start = async()=>{
    await connectDB();
    app.listen(3000, ()=>{
      console.log("App is active on port 3000");
    });
}

start();
