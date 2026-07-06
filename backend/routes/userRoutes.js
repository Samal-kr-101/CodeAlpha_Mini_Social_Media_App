const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    getProfile,
    updateProfile,
    followUser,
    unfollowUser
} = require("../controllers/userController");

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.put("/follow/:id", protect, followUser);

router.put("/unfollow/:id", protect, unfollowUser);

module.exports = router;