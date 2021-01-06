const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://fassih123:fassih123@devconnector.bcnhw.mongodb.net/graphql?retryWrites=true&w=majority`,
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
