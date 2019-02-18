
const series = [
  'min',
  'avg',
  'max'
];

function generateEchartsData() {
  const seriesWithData = series.map((seriesName) => {
    return {
      name: seriesName,
      type: 'line',
      data: [],
      showSymbol: false,
      hoverAnimation: false,
    }
  });

  const xValues = [];

  for (let i = 0; i < 350; i++) {
    const min = generateRandomNumberBetweenRange(15, 35);
    const max = generateRandomNumberBetweenRange(100, 135);

    const day = new Date(2019, 1, i + 1);

    xValues.push(day);

    seriesWithData[0].data.push([day, min]);
    seriesWithData[1].data.push([day, (min + max) / 2]);
    seriesWithData[2].data.push([day, max]);
  }

  return {
    xValues,
    series: seriesWithData
  };
}

function generateRandomNumberBetweenRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default generateEchartsData;