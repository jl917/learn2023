export function getPercentSeats(
  valueList: number[],
  precision: number = 2
): number[] {
  const sum = valueList.reduce(function (acc, val) {
    return acc + (isNaN(val) ? 0 : val);
  }, 0);
  if (sum === 0) {
    return [];
  }

  const digits = Math.pow(10, precision);
  const votesPerQuota = valueList.map(function (val) {
    return ((isNaN(val) ? 0 : val) / sum) * digits * 100;
  });
  const targetSeats = digits * 100;

  const seats = votesPerQuota.map(function (votes) {
    // Assign automatic seats.
    return Math.floor(votes);
  });
  let currentSum = seats.reduce((acc, val) => acc + val, 0);

  const remainder = votesPerQuota.map(function (votes, idx) {
    return votes - seats[idx];
  });

  // Has remainding votes.
  while (currentSum < targetSeats) {
    // Find next largest remainder.
    let max = Number.NEGATIVE_INFINITY;
    let maxId = null;
    for (let i = 0, len = remainder.length; i < len; ++i) {
      if (remainder[i] > max) {
        max = remainder[i];
        maxId = i;
      }
    }

    // Add a vote to max remainder.
    ++seats[maxId as number];
    remainder[maxId as number] = 0;
    ++currentSum;
  }
  return seats.map(function (seat) {
    return seat / digits;
  });
}
