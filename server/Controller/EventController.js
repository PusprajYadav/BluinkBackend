const Modal = require("../Schema/Events");

// event post
exports.EventPost = async (req, res) => {
  try {
    const EventData = await Modal.create(req.body);
    res.status(201).json({
      message: "Event  Posted Successsfully",
      EventData,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Event Not Posted yet",
      err: err,
    });
  }
};

// get all event data
exports.GetEvent = async (req, res) => {
  try {
    const GetAllEvents = await Modal.find();

    if (GetAllEvents) {
      res.status(201).json({
        message: "Events Received successfully",
        GetAllEvents,
      });
    } else {
      res.status(400).json({
        message: "Event Data Not Recived ",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

// delete event by id
exports.DeleteEvent = async (req, res) => {
  try {
    const DeleteEventData = await Modal.findByIdAndDelete(req.params.id);
    if (DeleteEventData) {
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

// update event by id UpdateEvent
exports.UpdateEvent = async (req, res) => {
  try {
    const UpdateEventData = await Modal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (UpdateEventData) {
      res.status(201).json({
        message: " Event Data Updated SuccessFully",
        UpdateEventData,
      });
    } else {
      req.status(404).json({
        message: "Event Data Not Able to Update",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Data Not Founded ",
      err,
    });
  }
};
