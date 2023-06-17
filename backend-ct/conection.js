require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://nguyenanhquoc28101988:yCzLWwthoDPJajwr@cluster0.igsd6c5.mongodb.net/fristdatabase?retryWrites=true&w=majority`;

// const connectionStr = `mongodb+srv://:${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster1.f2inldq.mongodb.net/web?webctctretryWrites=true&w=majority`;
mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
