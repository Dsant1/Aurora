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
            labels: ['Mayor de 18 años', 'Entre 13 - 17 años'],
            datasets: [{
                label: 'Edad de los participantes',
                data: [10, 10],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
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

    var ctx2 = document.getElementById('graph2').getContext('2d');
    var graph2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Sí', 'No'],
            datasets: [{
                label: '¿Te has sentido insegura al salir sola por las calles de Bogotá?',
                data: [20, 0],
                backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            var total = tooltipItem.dataset.data.reduce(function(a, b) { return a + b; }, 0);
                            var value = tooltipItem.raw;
                            var percentage = ((value / total) * 100).toFixed(2);
                            return value + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });

    var ctx3 = document.getElementById('graph3').getContext('2d');
    var graph3 = new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Sí', 'No'],
            datasets: [{
                label: '¿Has vivido algún caso de violencia en Bogotá?',
                data: [10, 10],
                backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            var total = tooltipItem.dataset.data.reduce(function(a, b) { return a + b; }, 0);
                            var value = tooltipItem.raw;
                            var percentage = ((value / total) * 100).toFixed(2);
                            return value + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });

    var ctx4 = document.getElementById('graph4').getContext('2d');
    var graph4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: ['1 caso', '2 a 4 casos', 'Más de 5 casos'],
            datasets: [{
                label: '¿Cuántos casos de mujeres cercanas a ti has conocido que han experimentado inseguridad y violencia en Bogotá?',
                data: [2, 15, 3],
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

    var ctx5 = document.getElementById('graph5').getContext('2d');
    var graph5 = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: ['Nula justicia', 'Poca justicia', 'Suficiente justicia'],
            datasets: [{
                label: 'Respecto a cuanta justicia se le da a los casos de violencia de género en el país, ¿cuanta justicia crees que se le da?',
                data: [5, 14, 1],
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

    var ctx6 = document.getElementById('graph6').getContext('2d');
    var graph6 = new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: ['Sí', 'No'],
            datasets: [{
                label: 'En bachillerato, ¿te enseñaron sobre educación sexual y reproductiva?',
                data: [15, 5],
                backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            var total = tooltipItem.dataset.data.reduce(function(a, b) { return a + b; }, 0);
                            var value = tooltipItem.raw;
                            var percentage = ((value / total) * 100).toFixed(2);
                            return value + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });

    var ctx7 = document.getElementById('graph7').getContext('2d');
    var graph7 = new Chart(ctx7, {
        type: 'pie',
        data: {
            labels: ['Sí', 'No'],
            datasets: [{
                label: '¿Conoces métodos anticonceptivos?',
                data: [20, 0],
                backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            var total = tooltipItem.dataset.data.reduce(function(a, b) { return a + b; }, 0);
                            var value = tooltipItem.raw;
                            var percentage = ((value / total) * 100).toFixed(2);
                            return value + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });

    var ctx8 = document.getElementById('graph8').getContext('2d');
    var graph8 = new Chart(ctx8, {
        type: 'bar',
        data: {
            labels: ['VIH', 'Herpes', 'Papiloma', 'Sífilis', 'Gonorrea'],
            datasets: [{
                label: '¿Qué enfermedades de transmisión sexual conoces?',
                data: [20, 15, 10, 10, 10],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
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

    var ctx9 = document.getElementById('graph9').getContext('2d');
    var graph9 = new Chart(ctx9, {
        type: 'pie',
        data: {
            labels: ['Sí', 'No'],
            datasets: [{
                label: '¿Crees que los embarazos adolescentes se podrían reducir si hubiera más educación sexual?',
                data: [20, 0],
                backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            var total = tooltipItem.dataset.data.reduce(function(a, b) { return a + b; }, 0);
                            var value = tooltipItem.raw;
                            var percentage = ((value / total) * 100).toFixed(2);
                            return value + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });

    var ctx10 = document.getElementById('graph10').getContext('2d');
    var graph10 = new Chart(ctx10, {
        type: 'bar',
        data: {
            labels: ['Educación desde los colegios', 'Más protección del gobierno', 'Talleres para padres e hijos', 'Seguridad para las mujeres', 'Promover campañas de respeto'],
            datasets: [{
                label: '¿Qué te gustaría que se cambiara en Bogotá acerca de la inseguridad en las mujeres y la falta de educación sexual y reproductiva?',
                data: [5, 4, 3, 4, 4],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
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
});
