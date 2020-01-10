//generate chart for weekly production income share

let husk1 = function () {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart1);
}

function drawChart1() {

    var data = google.visualization.arrayToDataTable([
        ['Hall', 'Share Unit'],
        ['Hall A', 7],
        ['Hall B', 12],
        ['Hall C', 11],
        ['Hall D', 19],
        ['Hall E', 4]
    ]);

    var options = {
        backgroundColor: 'transparent',
        pieSliceText: 'percentage',

        legend: {
            position: 'top',
            maxLines: 2,
        },

        slices: {
            0: {
                color: '#335b69'
            },
            1: {
                color: '#cf2f24'
            }
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

husk1()