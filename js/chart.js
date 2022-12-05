// Users chart
var options = {
    chart: {
    //   height: 380,
      width: "100%",
      type: "area",
      animations: {
        initialAnimation: {
          enabled: false
        }
      },
      id: 'sparkline1',
      group: 'sparklines',
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      },
    },
	colors: ['#EB4738'],
    series: [
      {
        name: "Series 1",
        data: [
          {
            x: "02-10-2017 GMT",
            y: 34
          },
          {
            x: "02-11-2017 GMT",
            y: 43
          },
          {
            x: "02-12-2017 GMT",
            y: 31
          },
          {
            x: "02-13-2017 GMT",
            y: 43
          }
        ]
      }
    ],
    xaxis: {
      type: "datetime"
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
// Users chart end
  
// Projects chart


var options = {
    chart: {
    //   height: 380,
      width: "100%",
      type: "line",
      id: 'sparkline1',
      group: 'sparklines',
      type: 'area',
      height: 100,
      sparkline: {
        enabled: true
      },
    },
	colors: ['#309903'],
    series: [
      {
        name: "Series 1",
        data: [[1, 34], [3.8, 43], [5, 31] , [10, 43], [13, 33], [15, 43], [18, 33] , [20, 52]]
      }
    ],
    xaxis: {
       type: 'numeric'
    },
    tooltip: {
      x: {
        formatter: function(val) {
          return val.toFixed(1);
        }
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  
  chart.render();
// Projects chart end

  
  // -----------------Offline Radial chart
  var options = {
    series: [67],
    chart: {
      height: 250,
      type: "radialBar",
      offsetY: -10
    },
	colors: ['#EB4738'],
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: undefined,
      width: 0.5,
      dashArray: 0,      
  },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            offsetY: 20,
            color: "red",
            formatter: function () {
              return ["Offline", "40,500"];
            }
          },
          value: {
            color: "#111",
            offsetY: -30,
            fontSize: "22px"
          }
        }
      }
    },
    labels: ["Median Ratio"]
  };
  
  var chart = new ApexCharts(document.querySelector("#chart_circle_left"), options);
  chart.render();
  
// --------------------------- Online Radial chart
var options = {
  series: [45],
  chart: {
    height: 250,
    type: "radialBar",
    offsetY: -10
  },
	colors: ['#309903'],
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: undefined,
    width: 0.5,
    dashArray: 0,      
},
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          offsetY: 20,
          color: "green",
          formatter: function () {
            return ["Online", "15,350"];
          }
        },
        value: {
          color: "#111",
          offsetY: -30,
          fontSize: "22px"
        }
      }
    }
  },
  labels: ["Median Ratio"]
};

var chart = new ApexCharts(document.querySelector("#chart_circle_right"), options);
chart.render();

// ----------------- total sales 
var options8 = {
	series: [{
		name: 'series1',
		data: [41, 50, 38, 61, 42, 70, 100]
	}, {
		name: 'series2',
		data: [21, 42, 55, 32, 34, 92, 41]
	}],
	chart: {
		height: "auto",
		type: 'area',
		toolbar: {
			show: false,
		},
		sparkline: {
			enabled: true
		}
	},
	grid: {
		show: false,
		padding: {
			left: 0,
			right: 0
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: false,
		curve: 'smooth'
	},
	xaxis: {
		type: 'numeric',
		lines: {
			show: false,
		},
		axisBorder: {
			show: false,
		},
		labels: {
			show: false,
		},
	},
	yaxis: [{
		y: 0,
		offsetX: 0,
		offsetY: 0,
		labels: {
			show: false,
		},
		padding: {
			left: 0,
			right: 0
		},
	}],
	tooltip: {
		x: {
			show: false,
			format: 'dd/MM/yy HH:mm'
		},
	},
};

var chart8 = new ApexCharts(document.querySelector("#chart8"), options8);
chart8.render();