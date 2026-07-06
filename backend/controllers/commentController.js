const Comment = require("../models/Comment");

// Add Comment
const addComment = async (req, res) => {
    try {
        const comment = await Comment.create({
            user: req.user._id,
            post: req.params.postId,
            text: req.body.text
        });

        res.status(201).json({
            message: "Comment Added",
            comment
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Comments
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({
            post: req.params.postId
        })
        .populate("user", "name")
        .sort({ createdAt: 1 });

        res.json(comments);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Comment
const deleteComment = async (req, res) => {
    try {

        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({
                message: "Comment Not Found"
            });
        }

        if(comment.user.toString()!==req.user._id.toString()){
            return res.status(403).json({
                message:"Not Authorized"
            });
        }

        await comment.deleteOne();

        res.json({
            message:"Comment Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message:error.message
        });

    }
};

module.exports={
    addComment,
    getComments,
    deleteComment
};