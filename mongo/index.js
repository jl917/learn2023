const mongoose = require("mongoose");
const generateWebLogs = require("./logs");
mongoose.connect("mongodb://127.0.0.1:27017/daoDev");

const Log = mongoose.model("Log", {
  timestamp: Date,
  user: String,
  page: String,
});

const DATA_LENGTH = 100_000;
const RUN_LIMIT = 900;

const runTask = async (num) => {
  if (num < RUN_LIMIT) {
    const st = new Date().getTime();
    console.log(`${num} 시작`)
    await Log.insertMany(generateWebLogs(DATA_LENGTH)).then((res) => {
      const et = new Date().getTime();
      console.log(`${num} 완료, 수행시간: ${et - st}`);
      runTask(num + 1);
    });
  }
};

runTask(0);
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   Log.insertMany(generateWebLogs(1000));
// }
