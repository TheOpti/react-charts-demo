
function generateData() {
  const data = [];

  for (let i = 0; i < 100; i++) {
    data.push([
      i + 1,
      generateRandomNumberBetweenRange(75, 90),
      generateRandomNumberBetweenRange(25, 45),
      generateRandomNumberBetweenRange(15, 32),
    ]);
  }

  return data;
}

function generateRandomNumberBetweenRange(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export default generateData;
