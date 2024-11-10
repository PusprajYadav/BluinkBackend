const Modal = require("../Schema/Blog.js");
const BlogModel = require("../Schema/Blog"); // Import the Blog Model

// Create a new blog post
exports.BlogPost = async (req, res) => {
  try {
    const blogData = await BlogModel.create(req.body); // Create new blog post from request body
    res.status(201).json({
      message: "Blog Post Created Successfully",
      blogData,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Failed to create Blog Post",
      err: err,
    });
  }
};

// Get all blog posts
exports.GetAllBlogs = async (req, res) => {
  try {
    const allBlogs = await BlogModel.find(); // Find all blog posts

    if (allBlogs.length > 0) {
      res.status(200).json({
        message: "Blogs Retrieved Successfully",
        allBlogs,
      });
    } else {
      res.status(404).json({
        message: "No Blogs Found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      err: err,
    });
  }
};

// Delete a blog post by ID
exports.DeleteBlog = async (req, res) => {
  try {
    const blogToDelete = await BlogModel.findByIdAndDelete(req.params.id); // Delete blog by ID

    if (blogToDelete) {
      res.status(200).json({
        message: "Blog Post Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Blog Post Not Found or Already Deleted",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error deleting blog post",
      err: err,
    });
  }
};

// Update a blog post by ID
exports.UpdateBlog = async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );

    if (updatedBlog) {
      res.status(200).json({
        message: "Blog Post Updated Successfully",
        updatedBlog,
      });
    } else {
      res.status(404).json({
        message: "Blog Post Not Found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error updating blog post",
      err: err,
    });
  }
};
