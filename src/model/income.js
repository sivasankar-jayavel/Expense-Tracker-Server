const mongoose = require("mongoose");

const monoosePaginate = require("mongoose-paginate-v2");

const incomeSchema = new mongoose.Schema(
    {
      title: {
        required: [true, "Title  is required"],
        type: String,
      },
      description: {
        required: [true, "Description  is required"],
        type: String,
      },
      type: {
        type: String,
        default: "income",
      },
      amount: {
        required: [true, "Amount is required"],
        type: Number,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,   //mongodb ID
        ref: "User",
        required: [true, "User is required"],
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
      timestamps: true,
    }
  );
   
incomeSchema.plugin(monoosePaginate);

  const Income = mongoose.model('Income', incomeSchema);
   module.exports = Income;