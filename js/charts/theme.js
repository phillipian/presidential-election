Highcharts.theme = {
  colors: ['#259FDD', '#FC5E47', '#F7C94E', '#232323'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: "'Lato', sans-serif"
    },
    margin: [0, 0, 0, 0],
    spacingTop:0,
    height: 135,
    spacingTop: -10
  },
  plotOptions: {
    series: {
      animation: false,
      groupPadding: 0,
      dataLabels: {
        enabled: false,
        style: {
          color: '#474747',
          textShadow: false
        },
        formatter: dataLabelFormatter
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  title: {
    text: null,
    style: {
      color: '#949494',
      fontWeight: '700',
      fontSize: '16px',
      textTransform: 'uppercase'
    }
  },
  subtitle: {
    text: null,
    style: {
      color: '#474747'
    }
  },
  xAxis: {
    gridLineColor: 'rgba(0, 0, 0, 0.1)',
    gridLineWidth: 0,
    lineWidth: 0,
    minorTickLength: 0,
    tickLength: 0,
    minPadding: 0,
    maxPadding: 0,
    style: {
      color: '#474747'
    },
    title: {
      text: null,
      style: {
        color: '#474747'
      }
    },
    labels: {
      style: {
        color: '#474747'
      }
    }
  },
  yAxis: {
    endOnTick: true,
    gridLineColor: 'rgba(0, 0, 0, 0.1)',
    gridLineWidth: 0,
    lineWidth: 0,
    reversedStacks: false,
    minPadding: 0,
    maxPadding: 0,
    style: {
      color: '#474747'
    },
    title: {
      text: '',
      style: {
        color: '#474747'
      }
    },
    labels: {
      enabled: false,
      style: {
        color: '#474747'
      }
    }
  },
  legend: {
    align: 'center',
    itemStyle: {
      color: '#474747',
      fontWeight: 'normal'
    },
    verticalAlign: 'bottom',
    backgroundColor: null,
    borderWidth: 0,
    shadow: false
  },
  tooltip: {
    animation: false,
    shadow: false,
    column: {
      formatter: columnToolTipFormatter
    }
  },
};

Highcharts.setOptions(Highcharts.theme);
