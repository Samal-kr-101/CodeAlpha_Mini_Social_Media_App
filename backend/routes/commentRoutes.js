const express=require("express");

const router=express.Router();

const protect=require("../middleware/authMiddleware");

const{
    addComment,
    getComments,
    deleteComment
}=require("../controllers/commentController");

router.post("/:postId",protect,addComment);

router.get("/:postId",getComments);

router.delete("/:id",protect,deleteComment);

module.exports=router;