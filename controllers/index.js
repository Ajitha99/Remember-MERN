const User = require('../models/user');

const bcrypt = require('bcryptjs');


const getAllUsers = async (req, res) =>{
    // let users;
    // try {
    //     users = await User.find();
    // } catch (error) {
    //     console.log(error);
    // }
    // if(!users){
    //     return res.status(404).json({message:"No Users Found"});
    // }
    // return res.status(200).json({users});

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

    try {
        existUser = await User.findOne({email : email});

    } catch (error) {
        console.log(error);
    }
    if(existUser){
        return res.status(400).json({message: "User already exists! Use Login"})
    }
    const hashedPwd = bcrypt.hashSync(password);
    const user = new User({
        name, //name: name
        email,
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

    try {
        existUser = await User.findOne({email : email});

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
    return res.status(200).json({message: "Login success!"});
}


module.exports = {
    getAllUsers,
    signup,
    login,
};