const expressAsyncHandler = require("express-async-handler");
const Expense = require("../../model/expense");


//-------------------------------------
//Create
//-------------------------------------
const createExpenseCtrl = expressAsyncHandler(async (req, res) => {

  const { description, title, amount ,user } = req.body;
  console.log(req.user);

  try {
    const expense = await Expense.create({
      description,
      title,
      amount,
      user
      // user: req?.user?._id,
    });
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});


//-------------------------------------
//Fetch all expenses
//-------------------------------------
const fetchExpensesCtrl = expressAsyncHandler(async (req, res) => {
  
   const { page } = req?.query;

   try {
    const expenses = await Expense.paginate(
      {},
      { limit: 10, page: Number(page), sort: "desc", populate:"user" }
    );
    // const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.json(error);
  }
});




//-------------------------------------
//Fetch single
//-------------------------------------
const fetchExpenseCtrl = expressAsyncHandler(async (req, res) => {
    const { page } = req?.query;
    const match = {};
    const sort = {};
    try {
      const expenses = await Expense.find().limit(2).skip(10);
      res.json(expenses);
    } catch (error) {
      res.json(error);
    }
  });

//-------------------------------------
//Update
//-------------------------------------
const updateExpenseCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { description, title, amount } = req.body;
  try {
    const expense = await Expense.findByIdAndUpdate(
      id,
      {
        description,
        title,
        amount,
      }
      // { new: true, runValidators: true }
    );
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});

//-------------------------------------
//Delete
//-------------------------------------
const deleteExpenseCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const expense = await Expense.findByIdAndDelete(id);
    res.json(expense);
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  createExpenseCtrl,
  fetchExpenseCtrl,
  fetchExpensesCtrl,
  updateExpenseCtrl,
  deleteExpenseCtrl,
};