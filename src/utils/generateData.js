
function generateData() {
  const data = [];

  for (let i = 0; i < 350; i++) {
    const min = generateRandomNumberBetweenRange(15, 35);
    const max = generateRandomNumberBetweenRange(100, 135);

    data.push([
      new Date(2019, 1, i + 1),
      min,
      ( min + max ) / 2,
      max,
      155,
    ]);
  }

  return data;
}

function generateRandomNumberBetweenRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default generateData;
