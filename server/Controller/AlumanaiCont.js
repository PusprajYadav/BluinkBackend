const Modal = require("../Schema/Alumani");

exports.AlumaniPost = async (req, res) => {
  try {
    const AlumanaiData = await Modal.create(req.body);
    res.status(201).json({
      message: "AlumanijPosted Successsfully",
      AlumanaiData,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Alumani  Not Posted yet",
      err: err,
    });
  }
};

// get all aluma alumanaii

exports.GetAllAlumani = async (req, res) => {
  try {
    const GetAllAlumanidata = await Modal.find();

    if (GetAllAlumanidata) {
      res.status(201).json({
        message: "Alumani Data Received successfully",
        GetAllAlumanidata,
      });
    } else {
      res.status(400).json({
        message: "Alumani Data Not Recived ",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};
// delete Alumani
exports.DeleteAlumanai = async (req, res) => {
  try {
    const DeleteAlumanaiData = await Modal.findByIdAndDelete(req.params.id);
    if (DeleteAlumanaiData) {
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

// update event data
exports.UpadetAlumani = async (req, res) => {
  try {
    const UpdateAlumanaiData = await Modal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (UpdateAlumanaiData) {
      res.status(201).json({
        message: " Alumani Data Updated SuccessFully",
        UpdateAlumanaiData,
      });
    } else {
      req.status(404).json({
        message: "Alumai Data Not Able to Update",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Data Not Founded ",
      err,
    });
  }
};
