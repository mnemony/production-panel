//generate chart for weekly production income share

const husk = function (chart) {
    google.charts.load('current', {
        'packages': ['corechart', 'controls']
    });

    google.charts.setOnLoadCallback(chart);


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

function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Reason', 'Waste unit'],
        ['Overproduction', 12],
        ['Quallity issues', 9],
        ['Techincal issues', 4],
        ['Other', 5]
    ]);

    var options = {
        backgroundColor: 'transparent',
        pieSliceText: 'percentage',

        legend: {
            position: 'top',
            maxLines: 3,
        },

        slices: {
            0: {
                color: '#F08080'
            },
            1: {
                color: '#daa520'
            },
            2: {
                color: '#008080'
            },
            3: {
                color: '#7fffd4'
            },
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

    chart.draw(data, options);
}





husk(drawChart1)
husk(drawChart2)