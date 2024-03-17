import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options:any = {
  responsive: true,
  plugins: {
    legend: { position: "top" }, // Set the position to one of the valid values, such as "top", "bottom", etc.
    title: {
      display: true,
      text: "Patient Satisfaction Rates.",
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Positive",
      data: [20,,22,24,26,28, 30, 40,,45, 50, 60, 70],
      backgroundColor: "green",
    },
    {
      label: 'Negative',
      data: [4,6,7,9,15,,18, 20, 25, 30,40, 45, 60],
      backgroundColor: 'red',
    },
  ],
};

export default function SatisFactionRate() {
  return (
    <div className="App">
      <Bar data={data} options={options}  />
    </div>
  );
}
