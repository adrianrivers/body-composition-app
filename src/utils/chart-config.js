const createChartOptions = (chartDateEntries, chartBfEntries) => ({
  type: "line",
  data: {
    labels: chartDateEntries,
    datasets: [
      {
        fill: false,
        label: "Body Fat Percentage %",
        data: chartBfEntries,
        borderColor: "#000",
        backgroundColor: "#e67e22",
        lineTension: 0,
      },
    ],
  },
  options: {
    fill: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Date",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Body Fat Percentage %",
          },
        },
      ],
    },
  },
});

export { createChartOptions };
