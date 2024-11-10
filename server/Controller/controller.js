const userModal = require("../Schema/userModal");

const bcrypt = require("bcrypt");

// post data from express for mogo db
exports.PostUser = async (req, res) => {
  try {
    const PostData = await userModal.create(req.body);
    res.status(201).json({
      message: "Data Posted Successsfully",
      PostData,
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      message: "Data Not Posted yet",
      err: err,
    });
  }
};

// get all data function

exports.GetAllData = async (req, res) => {
  try {
    const GetAllStudentData = await userModal.find();

    if (GetAllStudentData) {
      res.status(201).json({
        message: "Data Received successfully",
        GetAllStudentData,
      });
    } else {
      res.status(400).json({
        message: "Data Not Recived ",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

// get one data using the find one Email

exports.GetOneData = async (req, res) => {
  try {
    const GetParticular = await userModal.findOne({
      email: req.query.email,
    });

    if (GetParticular) {
      res.status(201).json({
        message: " Data Received Success Fully",
        GetParticular,
      });
    } else {
      res.status(400).json({
        message: " Data Not Found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

// GetAllParticularData Name
exports.GetAllParticularData = async (req, res) => {
  try {
    const GetAllParticularNameData = await userModal.find(req.query);
    if (GetAllParticularNameData) {
      res.status(201).json({
        message: "Data Received successfully",
        GetAllParticularNameData,
      });
    } else {
      res.status(400).json({
        message: "Data Not Found",
      });
    }
  } catch (err) {
    res.status(201).json({
      message: " Internal Server Error ",
    });
  }
};

// logic for update the data

exports.UpdateData = async (req, res) => {
  try {
    const UpdateUserData = await userModal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (UpdateUserData) {
      res.status(201).json({
        message: " Data Updated SuccessFully",
        UpdateUserData,
      });
    } else {
      req.status(404).json({
        message: "Data Not Able to Update",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Data Not Founded ",
      err,
    });
  }
};

//  delete user
exports.DeleteUser = async (req, res) => {
  try {
    const deleteUserData = await userModal.findByIdAndDelete(req.params.id);
    if (deleteUserData) {
      res.status(201).json({
        message: " Data Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Data Not Founded",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Internal Sever error",
      err,
    });
  }
};

// sign in
exports.SignIn = async (req, res) => {
  try {
    const SignInuser = await userModal.findOne({ email: req.body.email });

    if (SignInuser) {
      if (await bcrypt.compare(req.body.password, SignInuser.password)) {
        res.status(200).json({
          message: "Login SuccessFully",
        });
      } else {
        res.status(400).json({
          message: "Incorrect Password",
        });
      }
    } else {
      res.status(400).json({
        message: "User Does Not Exist, Login Failed",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Internal Sever Error",
      error: err,
    });
  }
};

// for posting the images

exports.ProfileImage = async (req, res) => {
  try {
    const ProfileUpload = await userModal.create(req.body);
    res.status(201).json({
      message: "Profile Uploaded",
      ProfileUpload,
    });
  } catch (err) {
    res.status(401).json({
      message: "Data Not Posted",

      err: err.message,
    });
    console.log(err);
  }
};
