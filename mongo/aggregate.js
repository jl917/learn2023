const dayjs = require("dayjs");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/daoDev");

const Log = mongoose.model("Log", {
  timestamp: Date,
  user: String,
  page: String,
});

const find = () => {
  const st = new Date().getTime();
  // // 이름별 카운팅 하기.
  // Log.aggregate([
  //   {
  //     $match: {
  //       timestamp: { $gte: dayjs("2022-01").startOf("month").toDate(), $lt: dayjs("2022-03").endOf("month").toDate() },
  //     },
  //   },
  //   { $limit: 10000 },
  //   {
  //     $group: { _id: "$user", total: { $sum: 1 } },
  //   },
  // ]).then((res) => {
  //   console.log(res);
  //   const et = new Date().getTime();
  //   console.log(`수행시간: ${et - st}`);
  //   // console.log(res);
  // });

  // 월별 카운팅 하기.
  Log.aggregate([
    {
      $match: {
        timestamp: {
          $gte: dayjs("2022-01").startOf("month").toDate(),
          $lt: dayjs("2022-03").endOf("month").toDate(),
        },
      },
    },
    { $limit: 10000 },
    {
      $group: {
        _id: {
          year: { $year: "$timestamp" },
          month: { $month: "$timestamp" },
        },
        total: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        date: {
          $concat: [
            {$toString: "$_id.year"},
            '-',
            {$toString: "$_id.month"},
          ]
        },
        total: 1,
      }
    }
  ]).then((res) => {
    console.log(res);
    const et = new Date().getTime();
    console.log(`수행시간: ${et - st}`);
    // console.log(res);
  });
};

find();
