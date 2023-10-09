const express = require("express");
const { createExpenseCtrl, fetchExpensesCtrl, fetchExpenseCtrl, updateExpenseCtrl, deleteExpenseCtrl } = require("../../controllers/expenses/expenseController");
const authMiddleware = require("../../middlewares/authentication");


const expenseRoute = express.Router();

expenseRoute.post("/",authMiddleware, createExpenseCtrl);
expenseRoute.get("/",authMiddleware,  fetchExpensesCtrl);
expenseRoute.get("/:id", authMiddleware, fetchExpenseCtrl);
expenseRoute.put("/:id", authMiddleware, updateExpenseCtrl);
expenseRoute.delete("/:id", authMiddleware, deleteExpenseCtrl);

module.exports = expenseRoute;