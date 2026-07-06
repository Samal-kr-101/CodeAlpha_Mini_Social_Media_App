const Post = require("../models/Post");

// Create Post
const createPost = async (req, res) => {
    try {

        const { caption, image } = req.body;

        const post = await Post.create({
            user: req.user._id,
            caption,
            image,
        });

        res.status(201).json({
            message: "Post Created",
            post,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

// Get All Posts
const getPosts = async (req, res) => {

    try {

        const posts = await Post.find()
            .populate("user", "name username profilePic")
            .sort({ createdAt: -1 });

        res.json(posts);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};

// Delete Post
const deletePost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {

            return res.status(404).json({
                message: "Post Not Found",
            });

        }

        if (post.user.toString() !== req.user._id.toString()) {

            return res.status(403).json({
                message: "Not Authorized",
            });

        }

        await post.deleteOne();

        res.json({
            message: "Post Deleted",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};

// Like Post
const likePost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post Not Found"
            });
        }

        if (post.likes.includes(req.user._id)) {
            return res.status(400).json({
                message: "Already Liked"
            });
        }

        post.likes.push(req.user._id);

        await post.save();

        res.json({
            message: "Post Liked"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Unlike Post
const unlikePost = async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post Not Found"
            });
        }

        post.likes = post.likes.filter(
            user => user.toString() !== req.user._id.toString()
        );

        await post.save();

        res.json({
            message: "Post Unliked"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {
    createPost,
    getPosts,
    deletePost,
    likePost,
    unlikePost
};