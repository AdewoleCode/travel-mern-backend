const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter)
app.use("/post", postRouter)




const port = process.env.PORT || 3030;
// const port = process.env.PORT


//conect to mongodb and start server
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

start();
