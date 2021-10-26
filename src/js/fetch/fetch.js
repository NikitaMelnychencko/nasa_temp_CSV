const Papa = require('papaparse');
import Chart from 'chart.js/auto';
const GLOBAL_MEAN_TEMPERATURE = 14;
const ctx = document.getElementById('myChart').getContext('2d');

fetchData().then(parseData).then(getLabelsAndData).then(({years, tempsGlob, tempsNHem, tempsSHem}) => drawtChart(years, tempsGlob,tempsNHem,tempsSHem));

async function fetchData() {
  return await fetch('./data/zon_ann.csv').then(response => response.text());
   
}

function parseData(data) {
  return Papa.parse(data, { header: true }).data
}

function getLabelsAndData(data) {
  return data.reduce(
    (acc, entry) => {
      acc.years.push(entry.Year);
      acc.tempsGlob.push(Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);
      acc.tempsNHem.push(Number(entry.NHem) + GLOBAL_MEAN_TEMPERATURE);
      acc.tempsSHem.push(Number(entry.SHem) + GLOBAL_MEAN_TEMPERATURE);
      return acc;
    },
    { years: [], tempsGlob: [], tempsNHem: [], tempsSHem: [] },
  );
  // const years = parsedData.map(entry => entry.Year);
  // const temps = parsedData.map(entry => Number(entry.Glob) + GLOBAL_MEAN_TEMPERATURE);
  // const tempsNHem = parsedData.map(entry => Number(entry.NHem) + GLOBAL_MEAN_TEMPERATURE);
  // const tempsSHem = parsedData.map(entry => Number(entry.SHem) + GLOBAL_MEAN_TEMPERATURE);
}
function drawtChart(years, tempsGlob,tempsNHem,tempsSHem) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Glob',
          data: tempsGlob,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'NHem',
          data: tempsNHem,
          backgroundColor: 'rgba(99, 255, 132, 0.2)',
          borderColor: 'rgba(99, 255, 132, 1)',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'tempsSHem',
          data: tempsSHem,
          backgroundColor: 'rgba(99, 132, 255, 0.2)',
          borderColor: 'rgba(99, 132, 255, 1)',
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value, index, values) {
              return value + '°';
            },
          },
        },
      },
    },
  });
}


