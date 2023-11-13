import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

// let labels = [0, 1, 2, 3, 4, 5, 6].map((i) => {
//   return dayjs().subtract(i, "day").format("MMM D, YYYY");
// });

const labels = new Array(3 * 30).fill(0).map((_, i) => {
  return dayjs().subtract(i, "day").format("MMM D, YYYY");
});

// labels = lastThreeMonth;

export const data = {
  labels,
  datasets: [
    {
      label: "Date",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
