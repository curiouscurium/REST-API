const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GETS THE POSTS
router.get('/',async(req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});


// SUBMITS THE POSTS
router.post('/', async(req,res) => {
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });

    
    try{
        const savedPost = await post.save();
         res.json(savedPost);
    } catch(err){
        res.json({message:err})
    } 
});


// SPECIFIC POST
router.get('/:postId',async(req,res) =>{
    try{
    const post = await Post.findById(req.params.postId)
    res.json(post);
    }catch(err) {
        res.json({message:err});
    }
});

// DELETE A SPECIFIC POST
router.delete('/:postId', async(req,res) =>{
    try{
   const removedPost = await Post.remove({_id: req.params.postId})
   res.json(removedPost);
    } catch(err){
        res.json({message:err});
    }
});

//UPDATE A POST
router.patch('/:postId', async(req,res) =>{
    try{
    const updatedpost= await Post.updateOne({_id: req.params.postId},{$set: {title:req.body.title}})
    res.json(updatedpost);
}catch(err){
    res.json({message:err});
}

});




module.exports = router;