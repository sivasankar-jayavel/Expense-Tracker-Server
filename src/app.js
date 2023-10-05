const express = require("express");
const  dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersController");
const userRoute = require("./routes/users/userRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();

// middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg : 'Welcome to expense tracker!'});
})

// dbConnection
dbConnect();

// routes
app.use("/api/users",userRoute)

// Error handler middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;