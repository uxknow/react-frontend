import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const addZero = (val) => {
  return val < 10 && val > 0 ? "0" + val : val;
};

const AreaChart = ({ dataPrices }) => {
  const data = {
    labels: [
      ...new Set(
        dataPrices.map(
          (price) =>
            addZero(new Date(price[0]).getDate()) +
            "." +
            addZero(new Date(price[0]).getMonth() + 1) +
            "." +
            new Date(price[0]).getFullYear()
        )
      ),
    ].filter((_, i) => i % 8 === 1),
    datasets: [
      {
        fill: true,
        label: "Цена",
        data: dataPrices.map((price) => price[1]),
        backgroundColor: ({ chart: { ctx } }) => {
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, "#c1ef00");
          gradient.addColorStop(1, "#232323");
          return gradient;
        },
      },
    ],
  };
  return <Line options={options} data={data} width={300} height={100} />;
};

export default AreaChart;
