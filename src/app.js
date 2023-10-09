const express = require("express");
const  dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersController");
const userRoute = require("./routes/users/userRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const incomeRoute = require("./routes/income/incomeRoute");
const expenseRoute = require("./routes/expenses/expenseRoute");

const app = express();

dotenv.config();

// middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.json({msg : 'Welcome to expense tracker!'});
})

// dbConnection
dbConnect();

//users routes
app.use("/api/users",userRoute)

// income Routes
app.use("/api/income",incomeRoute)

// expenses Routes
app.use("/api/expense",expenseRoute)

// Error handler middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;