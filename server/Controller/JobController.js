const Modal = require("../Schema/Jobs");

// job post
exports.JobPosts = async (req, res) => {
  try {
    const PostData = await Modal.create(req.body);
    res.status(201).json({
      message: "Job Posted Successsfully",
      PostData,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Job Data Not Posted yet",
      err: err,
    });
  }
};

//for getr all data GetJob

exports.GetJob = async (req, res) => {
  try {
    const GetAllJobData = await Modal.find();

    if (GetAllJobData) {
      res.status(201).json({
        message: "Job Data Received successfully",
        GetAllJobData,
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

// delete by id DeleteJob
exports.DeleteJob = async (req, res) => {
  try {
    const deleteJobData = await Modal.findByIdAndDelete(req.params.id);
    if (deleteJobData) {
      res.status(201).json({
        message: " Job Data Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Not Able To delete Founded",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Internal Sever error",
      err,
    });
  }
};

// update job by id
exports.UpdateJob = async (req, res) => {
  try {
    const UpdateJobData = await Modal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (UpdateJobData) {
      res.status(201).json({
        message: "JOB Updated SuccessFully",
        UpdateJobData,
      });
    } else {
      req.status(404).json({
        message: "JOB Data Not Able to Update",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: " Data Not Founded ",
      err,
    });
  }
};
