import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DashboardChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Properties Listed",
        data: [12, 19, 7, 15, 20, 10],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderRadius: 6,
      },
      {
        label: "Properties Sold",
        data: [8, 12, 5, 9, 14, 7],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Real Estate Activity Overview",
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default DashboardChart;
