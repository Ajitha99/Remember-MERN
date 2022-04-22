const User = require('../models/user');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const JWT_SECRETKEY = "kjfg;sdierudfkjg"


const getAllUsers = async (req, res) =>{
    try {
        const users = await User.find()
        return res.status(200).json({users})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const signup = async (req, res, next) =>{

    const { name, email, password } = req.body;

    let existUser;
    const em = email.toLowerCase();
    try {
        
        console.log(em);
        existUser = await User.findOne({email : em});

    } catch (error) {
        console.log(error);
    }
    if(existUser){
        return res.status(400).json({message: "User already exists! Use Login"})
    }
    const hashedPwd = bcrypt.hashSync(password);
    const user = new User({
        name, //name: name
        email:em,
        password: hashedPwd,
        blogs: [],
        codeSnippets: [], 
    });
    
    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({message: user});
}

const login = async (req, res, next) =>{
    const {email, password } = req.body;
    let existUser;
    const em = email.toLowerCase();
    try {
        
        existUser = await User.findOne({email : em});

    } catch (error) {
        console.log(error);
    }
    if(!existUser){
        return res.status(404).json({message: "User doesn't exist, please signup!"})
    }
    const isPwdCorrect = bcrypt.compareSync(password,existUser.password);
    if(!isPwdCorrect){
        return res.status(400).json({message: "Incorrect Password"})
    }
    //generating a jwt token for the user-after login is successful;
    //using user_id to generate JWT token -uses {HSA-256} behind the scene
    const jwtToken = jwt.sign({id: existUser._id}, JWT_SECRETKEY,{
    //   expiresIn:"1hr"  
         expiresIn:"30sec"  
    });

    res.cookie(String(existUser._id), jwtToken, {
        path:'/',
        expires: new Date(Date.now() + 1000 * 30), //expiry date and time(30sec's)
        httpOnly: true, //if we dont specify, this cookie is available in front end when we go to  inspect-> console->document.cookie , to avoid this for security reasons.. we give httpOnly : true  
        sameSite:'lax',
    });
    //return res.status(200).json({message: "Login success!", user:existUser, jwtToken});
    return res.status(200).json({message: "Login success!", user:existUser});
}

const verifyJWTtoken = (req, res, next)=>{
    const cookiee = req.headers.cookie;
    const token = cookiee.split("=")[1];
    console.log(token);
    // const header = req.headers['authorization'];
    // // console.log(header);
    // //spliting token at space and token will be at array index 1 position. 
    // //now we need to get the token and verify
    // const token = header.split(" ")[1];
    if(!token){
      res.status(404).json({message:"No token found"})  
    }
    jwt.verify(String(token), JWT_SECRETKEY, (error,user)=>{
        if(error){
            return res.status(400).json({message:"Invalid Token"})
        }
        console.log(user.id);
        req.id = user.id;
    })
    next();
    
}
const getUser = async (req,res,next) =>{
    const user_id = req.id;
    let user;
    try{
        //"-password" : if User exists, removes the password information and sends name and email;
        user = await User.findById(user_id,"-password");
    }catch(error){
        return new Error(error)
    }
    if(!user){
        return res.status(404).json({message: "User doesn't exist"})
    }
    return res.status(200).json({user});
}


module.exports = {
    getAllUsers,
    signup,
    login,
    verifyJWTtoken,
    getUser,
};