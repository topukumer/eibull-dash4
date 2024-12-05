// Recent Actions Pie Chart
var pieOptions = {
    chart: {
        type: 'pie'
    },
    series: [1205, 123, 312, 870],
    labels: ['Market Listing', 'Forum Posts', 'Profiles', 'Pastes'],
    title: {
        text: 'Here is the chart of Recent Actions..'
    }
};
var pieChart = new ApexCharts(document.querySelector("#piechart"), pieOptions);
pieChart.render();

// Recent Events Donut Chart
var donutOptions = {
    chart: {
        type: 'donut'
    },
    series: [11, 2, 2, 2, 7],
    labels: ['Work', 'Eat', 'Commute', 'Watch TV', 'Sleep'],
    title: {
        text: 'Here is the chart of Recent Events..'
    },
    plotOptions: {
        pie: {
            donut: {
                size: '40%'
            }
        }
    }
};
var donutChart = new ApexCharts(document.querySelector("#donutchart"), donutOptions);
donutChart.render();

// Recommend Identifier Bar Chart
var barOptions = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: false,
        horizontal: true,
    },
    series: [{
        name: 'Metric 1',
        data: [10]
    }, {
        name: 'Metric 2',
        data: [24]
    }, {
        name: 'Metric 3',
        data: [20]
    }, {
        name: 'Metric 4',
        data: [32]
    }],
    xaxis: {
        categories: ['Identifier'],
        title: {
            text: 'Metrics'
        },
    },
    yaxis: {
        title: {
            text: 'Identifiers'
        }
    },
    colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'],
    plotOptions: {
        bar: {
            horizontal: true,
            columnWidth: '50%'
        }
    }
};
var barChart = new ApexCharts(document.querySelector("#barchart"), barOptions);
barChart.render();

// High Risk Employee Leaked Credentials Bar Chart
var options = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: false,
    },
    series: [{
        name: 'Value',
        data: [10, 24, 20, 32]
    }],
    xaxis: {
        categories: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'], // Metric labels
        title: {
            text: 'Metrics'
        }
    },
    yaxis: {
        title: {
            text: 'Value'
        },
        min: 0 // Set minimum value for the y-axis
    },
    title: {
        text: 'Recommended Identifiers - 4 Columns'
    },
    colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'], // Colors for each column
    plotOptions: {
        bar: {
            horizontal: false, // Set to vertical bars
            columnWidth: '50%' // Adjust column width
        }
    },
    chartArea: {
        width: '50%' // Chart area width
    }
};
var chart = new ApexCharts(document.querySelector("#barchart2"), options);
chart.render();

// High Risk Corporate Infected Devices Chart
var options = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: false,
    },
    series: [{
        name: 'Infection Count',
        data: [30, 40, 50, 60, 20]  // Infection counts for each device
    }],
    xaxis: {
        categories: ['Device A', 'Device B', 'Device C', 'Device D', 'Device E'], // Device names
        title: {
            text: 'Devices'
        }
    },
    yaxis: {
        title: {
            text: 'Infection Count'
        },
        min: 0 // Ensure y-axis starts at 0
    },
    title: {
        text: 'Recent High Risk Infected Devices'
    },
    colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC'],  // Colors for each bar
    plotOptions: {
        bar: {
            horizontal: false, // Vertical bars
            columnWidth: '50%' // Adjust the column width
        }
    },
    chartArea: {
        width: '50%' // Similar to Google Charts' chartArea width
    }
};
var chart = new ApexCharts(document.querySelector("#infectedDeviceChart"), options);
chart.render();

// High Risk Look Alike Domains Chart
var options = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: false,
    },
    series: [{
        name: 'Risk Level',
        data: [10, 25, 20, 30, 15]  // Risk levels for each domain
    }],
    xaxis: {
        categories: ['example1.com', 'example2.net', 'example3.org', 'example4.biz', 'example5.co'],  // Domain names
        title: {
            text: 'Domains'
        },
        min: 0  // Ensure the x-axis starts from 0
    },
    yaxis: {
        title: {
            text: 'Risk Level'
        },
        min: 0  // Ensure y-axis starts from 0
    },
    title: {
        text: 'Recent High Risk Look Alike Domains'
    },
    colors: ['#FF5722', '#03A9F4', '#8BC34A', '#FFC107', '#9C27B0'],  // Colors for each bar
    plotOptions: {
        bar: {
            horizontal: false,  // Vertical bars
            columnWidth: '50%'  // Adjust column width
        }
    },
    chartArea: {
        width: '60%'  // Set chart area width
    }
};
var chart = new ApexCharts(document.querySelector("#lookAlikeDomainsChart"), options);
chart.render();