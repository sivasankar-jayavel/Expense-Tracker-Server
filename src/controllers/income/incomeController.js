const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/income");


//-------------------------------------
//Create income
//-------------------------------------
const createIncome = expressAsyncHandler(async (req, res) => {
  const { description, title, amount, user } = req.body;

  try {
    const income = await Income.create({
      description,
      title,
      amount,
      user,
    });
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});


//-------------------------------------
//Fetch all incomes
//-------------------------------------
const fetchIncomesCtrl = expressAsyncHandler(async (req, res) => {
  const { page } = req?.query;
  try {
    const incomes = await Income.paginate(
      {},
      { limit: 10, page: Number(page), sort: "desc", populate: "user" }
    );
    res.json(incomes);
  } catch (error) {
    res.json(error);
  }
});

//-------------------------------------
//Fetch single income
//-------------------------------------

const fetchIncomeCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params
  try {
    const income = await Income.findById(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
})

//-------------------------------------
//Update
//-------------------------------------
const updateIncomeCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { description, title, amount } = req.body;
  try {
    const income = await Income.findByIdAndUpdate(id, {
      description,
      title,
      amount,
    });
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});


// -------------------------------------
// Delete
// -------------------------------------
const deleteIncomeCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const income = await Income.findByIdAndDelete(id);
    res.json(income);
  } catch (error) {
    res.json(error);
  }
});


module.exports = { createIncome, fetchIncomesCtrl, fetchIncomeCtrl, updateIncomeCtrl, deleteIncomeCtrl };
