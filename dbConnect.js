const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    `mongodb+srv://fassih123:fassih123@devconnector.bcnhw.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
};

module.exports = connectDB;
