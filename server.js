const express = require("express");
const mongoose = require("mongoose");
const app =  express();


const PORT = process.env.PORT || 4444

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//unwrapping client data to original format and stores in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//makes public folder home directory on the browser
app.use(express.static("public"));

//connects routes
app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

//database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//starts server
app.listen(PORT, function () {
    console.log("app is listening on " + PORT);
  });