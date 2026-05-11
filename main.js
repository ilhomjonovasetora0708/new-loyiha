const ctx = document.getElementById('analyticsChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Productivity',
            data: [12, 19, 10, 25, 22, 30],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true
    }
});

const main = document.getElementById('mainChart');

new Chart(main, {
    type: 'bar',
    data: {
        labels: ['UI', 'Backend', 'API', 'Deploy'],
        datasets: [{
            label: 'Progress',
            data: [90, 70, 85, 95],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true
    }
});