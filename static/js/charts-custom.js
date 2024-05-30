/* Chart 1 */

var chartactivity = document.getElementById('chart1').getContext("2d");

var gradientStroke = chartactivity.createLinearGradient(200, 0, 100, 0);
gradientStroke.addColorStop(0, "rgba(58, 233, 245, 1)");
gradientStroke.addColorStop(1, "rgba(18, 216, 227, 1)");

var gradientStroke2 = chartactivity.createLinearGradient(200, 0, 100, 0);
gradientStroke2.addColorStop(0, "rgba(255, 92, 203, 1)");
gradientStroke2.addColorStop(1, "rgba(253, 133, 168, 1)");

var gradientFill = chartactivity.createLinearGradient(0, 0, 0, 350);
gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.5)");
gradientFill.addColorStop(1, "rgba(128, 182, 244, 0)");

var gradientFill2 = chartactivity.createLinearGradient(0, 0, 0, 350);
gradientFill2.addColorStop(0, "rgba(244, 67, 54, 0.5)");
gradientFill2.addColorStop(1, "rgba(244, 67, 54, 0)");


// Get the current date
var currentDate = new Date();

// Function to get the last 30 days' names
function getLast30Days() {
    var dates = [];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date();

    console.log(currentDate.getDate())

    for (var i = currentDate.getDate() - 1; i >= 0; i--) {  // Change 17 to 29 for the last 30 days
        var pastDate = new Date(currentDate);
        pastDate.setDate(currentDate.getDate() - i);
        var day = pastDate.getDate();
        var month = monthNames[pastDate.getMonth()]; // Get the month name from the array
        dates.push(day + ' ' + month);
    }
    return dates;
}

var last30DaysNames = getLast30Days();

var ActivityChart = new Chart(chartactivity, {
    type: 'line',

    data: {
        labels: last30DaysNames,
        datasets: [{
            label: "Revenue",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            pointHoverBackgroundColor: "rgba(128, 182, 244, 1)",
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 1,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 1,
            data: last7DaysData,
        }, 
        {
            label: "Sortie",
            borderColor: gradientStroke2,
            pointBorderColor: gradientStroke2,
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            pointHoverBackgroundColor: "rgba(253, 65, 60, 1)",
            pointHoverBorderColor: gradientStroke2,
            pointBorderWidth: 1,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill2,
            borderWidth: 1,
            data: last7DaysDataSortie,
        },
        ]
    },
    options: {
        legend: {
            position: "top",
            labels: {
                boxWidth: 15,
                padding: 15,
                fontColor: "#96a2b4",
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#96a2b4",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "#96a2b4",
                    fontStyle: "bold"
                }
            }]
        }
    }
});

// chart 2
// var ctx = document.getElementById("chart2").getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr'],
//         datasets: [{
//             label: 'Admitted',
//             data: last7DaysData,
//             barPercentage: .5,
//             backgroundColor: "#5c79c3",


//         }, {
//             label: 'Discharge',
//             data: last7DaysDataSortie,
//             barPercentage: .5,
//             backgroundColor: "#d17656",

//         }]
//     },
//     options: {
//         maintainAspectRatio: false,

//         legend: {
//             display: false,
//             labels: {
//                 fontColor: '#585757',
//                 boxWidth: 40,

//             }
//         },
//         tooltips: {
//             enabled: true
//         },
//         scales: {
//             xAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     fontColor: '#96a2b4'
//                 },
//                 gridLines: {
//                     display: false,
//                     color: "rgba(0, 0, 0, 0.07)"
//                 },
//             }],
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                     fontColor: '#96a2b4'
//                 },
//                 gridLines: {
//                     display: false,
//                     color: "rgba(0, 0, 0, 0.07)"
//                 },
//             }]
//         }
//     }
// });


// Calculate the total of last7DaysDataSortie
var totalRevenue = last7DaysData.reduce(function(acc, val) {
    return acc + val;
}, 0);

// Calculate the total of last7DaysDataSortie
var totalSortie = last7DaysDataSortie.reduce(function(acc, val) {
    return acc + val;
}, 0);

document.getElementById('totalRevenue').innerText = totalRevenue + " DH";
document.getElementById('totalSortie').innerText = totalSortie + " DH";

console.log(totalSortie);
console.log(totalRevenue);
// chart 3
new Chart(document.getElementById("chart3"), {
    
    
    type: 'doughnut',
    data: {
        labels: ["Revenue","Sortie"],
        datasets: [{
            label: "Activity (millions)",
            backgroundColor: ["rgba(128, 182, 244, 1)", "rgba(244, 67, 54, 1)", ],
            // data: [2478, 5267, 734, 784],
            data: [totalRevenue,totalSortie]
        }]
    },
    options: {
        legend: {
            display: false,
            position: "left",

        },
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'Activity'
        }
    }
});