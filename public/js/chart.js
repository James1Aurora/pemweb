const avgPlayctx = document.getElementById("avgPlays");
const totalPlayctx = document.getElementById("totalPlays");

const labelTotalPlays = ["Month 1", "Month 2", "Month 3"];
const labelPlays = ["Easy", "Medium", "Hard"];

const dataTotalPlay = {
    labels: labelTotalPlays,
    datasets: [
        {
            label: "Total Playing",
            data: [65, 59, 80],
            backgroundColor: "rgb(6, 182, 212)",
            borderColor: "rgb(6, 182, 212)",
            borderWidth: 1,
            borderRadius: 10,
        },
    ],
};

const dataPlays = {
    labels: labelPlays,
    datasets: [
        {
            label: "All Datas",
            data: [5, 9, 10],
            backgroundColor: "rgb(6, 182, 212)",
            borderColor: "rgb(6, 182, 212)",
            borderWidth: 1,
            borderRadius: 10,
        },
    ],
};

const configTotalPlay = {
    type: "bar",
    data: dataTotalPlay,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const configPlays = {
    type: "bar",
    data: dataPlays,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

new Chart(totalPlayctx, configTotalPlay);
new Chart(avgPlayctx, configPlays);
