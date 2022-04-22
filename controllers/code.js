const mongoose = require('mongoose');
const Code = require('../models/codeSnippet');
const User = require('../models/user');

const getAllCode = async (req, res)=>{
    try {
        const codes = await Code.find().populate('user');
        return res.status(200).json({codes})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const addCodePost = async (req, res) =>{
    const { title, snippet, user} = req.body;
    let existingUser;
    try{
        existingUser = await User.findById(user);
    }catch(error){
        console.log(error);
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable to find User by this Id!"})
    }
    const code = new Code({
        title,
        snippet,
        user,
    });
    try {
        // await blog.save();
        const session = await mongoose.startSession();
        session.startTransaction();
        await code.save({ session });
        existingUser.codeSnippets.push(code);
        await existingUser.save({ session });
        await session.commitTransaction();

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error});
    }
    res.status(200).json({code});



    // try {
    //     const code = await new Code(req.body)
    //     await code.save()
    //     return res.status(201).json({
    //         code,
    //     })
    // } catch (error) {
    //     return res.status(500).json({error: error.message})
    // }
}

const updateCodePost = async (req, res) =>{
    try {
        const {id} = req.params
        Code.findByIdAndUpdate(id, req.body, { new: true }, (err, code) => {
            if(err){
                res.status(500).send(err);
            }
            if(!code){
                res.status(500).json({message: 'CodeSnippet not found!'});
            }
            return res.status(200).json(code);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getCodeById = async (req,res)=>{
    try {
        const {id} = req.params;
        const code = await Code.findById(id);
        if(code){
            return res.status(200).json({ code });
        }
        return res.status(404).send({message:'Code Snippet with specified ID does not exist'});
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCodeById = async (req,res)=>{
    const id = req.params.id;

    let code;

    try{
        code = await Code.findByIdAndRemove(id).populate('user');
        await code.user.codeSnippets.pull(code);//removes the corresponding codesnippet id from users blogs array
        await code.user.save();
    }catch(error){
        console.log(error);
    }
    if(!code){
        return res.status(500).json({message:"Unable to Delete the code snippet"});
    }
    return res.status(200).json({message: "Successfully deleted the code snippet"});
}

const getCodesByUserId = async ( req, res) =>{
    const userId = req.params.id;
    // console.log(userId);
    let userCodes;
    try{
        userCodes = await User.findById(userId).populate("codeSnippets");
    }catch(error){
        console.log(error);
    }
    if(!userCodes){
        return res.status(404).json({message: "There are no code snippets to display!"})
    }
    return res.status(200).json({ Codes: userCodes });
}

module.exports = {
    getAllCode,
    addCodePost, 
    updateCodePost,
    getCodeById,
    deleteCodeById,
    getCodesByUserId,
};