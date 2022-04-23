const mongoose = require('mongoose');
const Blog = require('../models/blog');
const User = require('../models/user');

const getAllBlogs = async (req, res)=>{
    
    try {
        const blogs = await Blog.find().populate('user');
        return res.status(200).json({blogs})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const addBlogPost = async (req, res) =>{
    const { title, description, image, user} = req.body;
    let existingUser;
    try{
        existingUser = await User.findById(user);
    }catch(error){
        console.log(error);
    }
    if(!existingUser){
        return res.status(400).json({message: "Unable to find User by this Id!"})
    }
    const blog = new Blog({
        title,
        description,
        image,
        user,
    });
    try {
        // await blog.save();
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error});
    }
    res.status(200).json({blog});
    // try {
    //     const blog = await new Blog(req.body)
    //     await blog.save()
    //     return res.status(201).json({
    //       blog,
    //     })
    // } catch (error) {
    //     return res.status(500).json({error: error.message})
    // }
}

const updateBlogPost = async (req, res) =>{
    // const { title, description, image } = req.body;
    // const id = req.params.id;
    // let blog;
    // try {
    //     blog = await Blog.findByIdAndUpdate(id,{
    //         title,
    //         description,
    //         image, 
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
    // if(!blog){
    //     return res.status(500).json({message: "Unable to Update the blog"})
    // }
    // res.status(200).json({ blog });
    try {
        const {id} = req.params
        Blog.findByIdAndUpdate(id, req.body, { new: true }, (err, blog) => {
            if(err){
               return res.status(500).send(err);
            }
            if(!blog){
               return res.status(500).json({message: 'Blog not found!'});
            }
            return res.status(200).json(blog);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
const getBlogById = async (req,res)=>{
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id);
        if(blog){
            return res.status(200).json({ blog });
        }
        return res.status(404).send({message:'Blog with specified ID does not exist'});
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteBlogById = async (req,res)=>{
    
        const id = req.params.id;

        let blog;

        try{
            blog = await Blog.findByIdAndRemove(id).populate('user');
            await blog.user.blogs.pull(blog);//removes the corresponding blog id from users blogs array
            await blog.user.save();
        }catch(error){
            console.log(error);
        }
        if(!blog){
            return res.status(500).json({message:"Unable to Delete the blog"});
        }
        return res.status(200).json({message: "Successfully deleted the blog"});
    }


    //     const deleted = await Blog.findByIdAndDelete(id).populate('user');
    //     await deleted.user.blogs.pull(blog);
    //     await deleted.user.save();
    //     if(deleted){
    //         return res.status(200).send({message: 'Blog Deleted'});
    //     }
    //     return res.status(500).json({message: "Unable to delete the blog"})
    // } catch (error) {
    //     return res.status(500).send(error.message);
    // }

    const getBlogsByUserId = async ( req, res) =>{
        const userId = req.params.id;
        // console.log(userId);
        let userBlogs;
        try{
            userBlogs = await User.findById(userId).populate("blogs");
        }catch(error){
            console.log(error);
        }
        if(!userBlogs){
            return res.status(404).json({message: "There are no blogs to display!"})
        }
        return res.status(200).json({ user: userBlogs });
    }



module.exports = {
    getAllBlogs,
    addBlogPost, 
    updateBlogPost,
    getBlogById,
    deleteBlogById,
    getBlogsByUserId,
};