const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      ``,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("Connected to Database");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
