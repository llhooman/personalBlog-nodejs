const Post = require("../models/Post");
const homePageController = async (req, res) => {
    // Find all posts
    const posts = await Post.findAll();
    res.render("index", {
        posts
    });
};
module.exports = homePageController;
