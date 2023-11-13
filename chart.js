// Wrap the Chart.js code in a function
function createManagerChart() {
    // Data for the chart
    var managerData = {
        labels: ["Pep Guardiola", "Arsene Wenger", "Sir Alex Ferguson", "Jose Mourinho", "Luis Enrique"],
        datasets: [{
            label: "Percentage of Trophies and Games Won by Each Manager Since 2005",
            backgroundColor: ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"],
            data: [1/3, Math.random() * 0.2, Math.random() * 0.2, Math.random() * 0.2, Math.random() * 0.2]
        }]
    };

    // Get the canvas element
    var ctx = document.getElementById("managerChart").getContext("2d");

    // Create the pie chart
    var managerChart = new Chart(ctx, {
        type: 'pie',
        data: managerData
    });
}

// Call the function after the document has loaded
document.addEventListener("DOMContentLoaded", function() {
    createManagerChart();
});
