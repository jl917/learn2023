const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/daoDev");

const Log = mongoose.model("Log2", {
  timestamp: Date,
  user: String,
  page: String,
});

const find = () => {
  const st = new Date().getTime();
  Log.aggregate([
    {
      $match: {
        timestamp: { $gte: new Date(2022, 1, 1), $lt: new Date(2022, 2, 1) },
      },
    },
    { $limit: 1000 },
    {
      $group: { _id: "$user", total: { $sum: 1 } },
    },
  ]).then((res) => {
    console.log(res);
    const et = new Date().getTime();
    console.log(`수행시간: ${et - st}`);
    // console.log(res);
  });
};

find();
