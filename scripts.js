document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion .btn-link');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var collapseElement = document.querySelector(this.dataset.target);
            var isCollapsed = collapseElement.classList.contains('show');

            accordionButtons.forEach(function(btn) {
                var target = document.querySelector(btn.dataset.target);
                if (target !== collapseElement) {
                    target.classList.remove('show');
                }
            });

            if (!isCollapsed) {
                collapseElement.classList.add('show');
            } else {
                collapseElement.classList.remove('show');
            }
        });
    });

    // Chart.js graphs
    var ctx1 = document.getElementById('graph1').getContext('2d');
    var graph1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Label1', 'Label2', 'Label3'],
            datasets: [{
                label: 'Dataset 1',
                data: [10, 20, 30],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Repeat for other graphs
    var ctx2 = document.getElementById('graph2').getContext('2d');
    var graph2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Label1', 'Label2', 'Label3'],
            datasets: [{
                label: 'Dataset 2',
                data: [15, 25, 35],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Add similar code for graph3 to graph10
});
