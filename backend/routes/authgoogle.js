const express=require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config()
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  picture: { type: String },
  lastLogin: { type: Date },
//   activities: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Activity' // Reference to your activities model
//   }],
  createdAt: { type: Date, default: Date.now }
});

const User=mongoose.model("User",userSchema);

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/login",async(req,res)=>{
    const { token } = req.body;
   
    try {
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.GOOGLE_CLIENT_ID,
        }) ;
        
        const payload = ticket.getPayload();
        const googleId = payload.sub;
        const email = payload.email;
        const name = payload.name;
        const picture = payload.picture;
    

        let user = await User.findOne({googleId});
        
        if(user){
            user.lastLogin=new Date();
            await user.save();
            console.log("existing user logged in",user.email);
        }
        else{
            user = new User({
                googleId,
                email,
                name,
                picture,
                lastLogin:new Date()
            });
            await user.save();
            console.log("new user logged in",user.email);   

        }

        const userToken= jwt.sign({
            userId:user._id,
            email:user.email
        },
    process.env.JWT_SECRET,
    {expiresIn:"1h"}
);
res.status(200).json({ 
    token: userToken,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      picture: user.picture
    }
  });
       
    } catch (error) {
        console.error('Google authentication error:', error);
        res.status(500).json({ 
          error: 'Authentication failed',
          details: error.message 
        });
      } 
})

module.exports=router;  