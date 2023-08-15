const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/daoDev");

const Log = mongoose.model("Log",{
  timestamp: Date,
  user: String,
  page: String,
});

const find = () => {
  const st = new Date().getTime();
  Log.find({}).limit(100000).skip(1000).then(res => {
    const et = new Date().getTime();
    console.log(`수행시간: ${et - st}`);
    // console.log(res);
  })
}

find();