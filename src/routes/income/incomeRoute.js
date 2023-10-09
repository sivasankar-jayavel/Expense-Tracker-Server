const express = require('express');
const { createIncome, fetchIncomesCtrl, fetchIncomeCtrl, updateIncomeCtrl, deleteIncomeCtrl } = require('../../controllers/income/incomeController');
const authMiddleware = require('../../middlewares/authentication');

const incomeRoute = express.Router();

incomeRoute.post('/',authMiddleware,createIncome)
incomeRoute.get('/',authMiddleware,fetchIncomesCtrl)
incomeRoute.get('/:id',authMiddleware,fetchIncomeCtrl)
incomeRoute.put('/:id',authMiddleware,updateIncomeCtrl)
incomeRoute.delete('/:id',authMiddleware,deleteIncomeCtrl)

module.exports = incomeRoute;