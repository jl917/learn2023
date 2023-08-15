const {faker} = require('@faker-js/faker');

// 랜덤 사용자 정보 생성 함수
function getRandomUser() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const pages = ['/home', '/about', '/products', '/contact'];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];

  return {
    timestamp: faker.date.between({ from: '2022-01-01T00:00:00.000Z', to: '2023-01-01T00:00:00.000Z' }),
    user: randomName,
    page: randomPage,
  };
}

// 웹 로그 샘플 데이터 생성 함수
function generateWebLogs(numLogs) {
  const logs = [];

  for (let i = 0; i < numLogs; i++) {
    logs.push(getRandomUser());
  }

  return logs;
}

// 웹 로그 샘플 데이터 생성 및 출력
// const numLogsToGenerate = 1000;
// const webLogs = generateWebLogs(numLogsToGenerate);
module.exports = generateWebLogs;