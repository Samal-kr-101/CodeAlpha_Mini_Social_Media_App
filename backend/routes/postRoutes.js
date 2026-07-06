const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    createPost,
    getPosts,
    deletePost,
    likePost,
    unlikePost
} = require("../controllers/postController");

router.get("/", getPosts);

router.post("/", protect, createPost);

router.delete("/:id", protect, deletePost);

router.put("/like/:id", protect, likePost);

router.put("/unlike/:id", protect, unlikePost);

module.exports = router;