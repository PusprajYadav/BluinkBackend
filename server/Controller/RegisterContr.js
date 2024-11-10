const Modal = require("../Schema/Register");

// post from front end to mongo
exports.PostUser = async (req, res) => {
  try {
    const PostData = await Modal.create(req.body);
    res.status(201).json({
      message: "Registered Successfully ",
      PostData,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Unable to Registered",
      err: err,
    });
  }
};

exports.GetAllUsers = async (req, res) => {
  try {
    const GetAllUsersData = await Modal.find();

    if (GetAllUsersData) {
      res.status(201).json({
        message: "Registered Users Data Received successfully",
        GetAllUsersData,
      });
    } else {
      res.status(400).json({
        message: "Registered Users Not Recived ",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

// delete by id
exports.DeleteRegUser = async (req, res) => {
  try {
    const DeleteRegUserData = await Modal.findByIdAndDelete(req.params.id);
    if (DeleteRegUserData) {
      res.status(201).json({
        message: " User Data Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Not Able To delete User",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Internal Sever error",
      err,
    });
  }
};
