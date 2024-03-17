import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options:any = {
  responsive: true,
  plugins: {
    legend: { position: "top" }, // Set the position to one of the valid values, such as "top", "bottom", etc.
    title: {
      display: true,
      text: "Monthly Registered Users",
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "male",
      data: [20,25, 30,,35, 40,45, 50,55, 60,65, 70],
      backgroundColor: "pink",
    },
    {
      label: 'female',
      data: [5,,10,15, 20, 25,30,35, 40, 45,50,55, 60],
      backgroundColor: 'blue',
    },
  ],
};

export default function MonthlyUsers() {
  return (
    <div className="App">
      <Bar data={data} options={options}  />
    </div>
  );
}
