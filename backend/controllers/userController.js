const User = require("../models/User");

// Get Logged-in User
const getProfile = async (req, res) => {
    res.json(req.user);
};

// Update Profile
const updateProfile = async (req, res) => {
    try {
        const { name, bio, profilePic } = req.body;

        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found",
            });
        }

        user.name = name || user.name;
        user.bio = bio || user.bio;
        user.profilePic = profilePic || user.profilePic;

        await user.save();

        res.json({
            message: "Profile Updated",
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Follow User
const followUser = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        const target = await User.findById(req.params.id);

        if (!target) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        if (user.following.includes(target._id)) {
            return res.status(400).json({
                message: "Already Following"
            });
        }

        user.following.push(target._id);

        target.followers.push(user._id);

        await user.save();

        await target.save();

        res.json({
            message: "User Followed"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Unfollow User
const unfollowUser = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        const target = await User.findById(req.params.id);

        user.following = user.following.filter(
            id => id.toString() !== target._id.toString()
        );

        target.followers = target.followers.filter(
            id => id.toString() !== user._id.toString()
        );

        await user.save();

        await target.save();

        res.json({
            message: "User Unfollowed"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {
    getProfile,
    updateProfile,
    followUser,
    unfollowUser
};