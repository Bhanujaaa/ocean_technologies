const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); // Add this line
require('./database');
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;



// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Routes
const jobRouter = require('./routes/job');
const userRouter=require('./routes/user')
app.use(jobRouter);
app.use(userRouter)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  app.listen(PORT, () => console.log(`App is running on PORT: ${PORT}`));