const express = require("express");
// for incresing payload
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const mongoose = require("mongoose");

const Port = 5000;

// alll controller files imported
const RegisterationController = require("./Controller/RegisterContr");
const AlumaniController = require("./Controller/AlumanaiCont");
const JobController = require("./Controller/JobController");
const EventController = require("./Controller/EventController");
const BlogController = require("./Controller/BlogController");

// middlewares
app.use(cors()); // connection from forntend to backend
app.use(express.json()); // connection from backend to database
app.use(bodyParser.json());

// db connection
mongoose
  .connect(
    "mongodb+srv://Bluink360:Bluink360@cluster0.zwv76.mongodb.net/Bluink360"
  )
  .then((res) => {
    console.log("MongoDB Connected Successfully ");
  })
  .catch((err) => {
    console.log(err);
  });

//*********************************Admin*********************************************/
// admin

//alumanai post from admin panel
app.post("/api/Admin/Alumanai", AlumaniController.AlumaniPost);
//get all Alumani
app.get("/api/GetAllAlumanai", AlumaniController.GetAllAlumani);
// delete alumani data
app.delete("/api/DeleteAlumanai/:id", AlumaniController.DeleteAlumanai);
// update alumanai data
app.put("/api/UpdateAlumani/:id", AlumaniController.UpadetAlumani); // pending not working

// event post
app.post("/api/Admin/Event", EventController.EventPost);
//get all events
app.get("/api/GetAllEvent", EventController.GetEvent);
// dlete posts
app.delete("/api/DeleteEventbybId/:id", EventController.DeleteEvent);
// Update by id
app.put("/api/UpdateEventbyId/:id", EventController.UpdateEvent);

//job posting from Admin panel
app.post("/api/Admin/Job", JobController.JobPosts);
//get job
app.get("/api/GetAllJob", JobController.GetJob);
// delete job
app.delete("/api/DeleteJobById/:id", JobController.DeleteJob);
// update job data
app.put("/api/UpdateJob/:id", JobController.UpdateJob);

// Blog  posting from Admin Panel
app.post("/api/Admin/Blogs", BlogController.BlogPost);

//get Blog
app.get("/api/GetAllBlog", BlogController.GetAllBlogs);

//DeleteBlog
app.delete("/api/DeleteBlogById/:id", BlogController.DeleteBlog);

//DeleteBlog

// for front end
// only post and get for registration

app.post("/api/Registraion", RegisterationController.PostUser);

app.get("/api/AllUsers", RegisterationController.GetAllUsers);

app.delete("/api/DeleteUserId/:id", RegisterationController.DeleteRegUser);

// staring the app
app.listen(Port, "127.0.0.1", () => {
  console.log("Server Started At " + Port);
});
