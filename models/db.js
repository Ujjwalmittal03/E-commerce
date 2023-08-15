const mongoose = require("mongoose");

module.exports.init = async function () {
  await mongoose.connect(
    "mongodb+srv://jainshreya01:jainshreya01@cluster0.xsr364r.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Connected to database");
};
