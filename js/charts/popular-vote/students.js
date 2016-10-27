/**
 * Copyright (c) 2016 The Phillipian.
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */
$(function () {
  $('.chart.student-popular-vote').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [' '],
      labels: {
        rotation: -90,
      }
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        stacking: 'percent',
        pointPadding: 0,
        groupPadding: 0
      }
    },
    title: {
      enabled: false,
      text: null
    },
    tooltip: {
      formatter: stackedBarToolTipFormatter
    },
    series: [{
      name: 'Clinton',
      data: [95.3]
    },{
      name: 'Trump',
      data: [4.7]
    }]
  });
});
