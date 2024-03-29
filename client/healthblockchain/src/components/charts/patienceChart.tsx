import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options:any = {
  responsive: true,
  plugins: {
    legend: { position: "top" }, // Set the position to one of the valid values, such as "top", "bottom", etc.
    title: {
      display: true,
      text: "Financial data",
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "In ward Claims",
      data: [20, 30, 40, 50, 60, 70],
      backgroundColor: "black",
    },
    {
      label: 'Outward Claims',
      data: [15, 20, 25, 40, 45, 60],
      backgroundColor: 'green',
    },
  ],
};

export default function BarCharts() {
  return (
    <div className="App">
      <Bar data={data} options={options}  />
    </div>
  );
}
