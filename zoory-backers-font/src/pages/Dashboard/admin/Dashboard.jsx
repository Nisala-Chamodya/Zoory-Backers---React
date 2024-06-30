import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const products = [
  { name: "Bun", price: 1.2 },
  { name: "Rice", price: 2.5 },
  { name: "Kotthu", price: 3.0 },
  { name: "Pizza", price: 5.0 },
  { name: "Ice Cream", price: 2.0 },
  { name: "Cake", price: 4.5 },
];

const categories = ["bun", "rice", "kotthu", "pizza", "deserts", "dessert"];
const salesData = {
  bun: [10, 20, 30, 40, 50, 60, 70],
  rice: [5, 15, 25, 35, 45, 55, 65],
  kotthu: [7, 14, 21, 28, 35, 42, 49],
  pizza: [12, 24, 36, 48, 60, 72, 84],
  deserts: [3, 6, 9, 12, 15, 18, 21],
  dessert: [2, 4, 6, 8, 10, 12, 14],
};

const orangeColor = "rgba(255, 165, 0, 1)";
const orangeHoverColor = "rgba(255, 165, 0, 0.7)";
const getRandomColor = () =>
  `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, 1)`;

const Dashboard = () => {
  const barData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: categories.map((category) => ({
      label: category.charAt(0).toUpperCase() + category.slice(1),
      backgroundColor: orangeColor,
      borderColor: orangeColor,
      borderWidth: 1,
      hoverBackgroundColor: orangeHoverColor,
      hoverBorderColor: orangeHoverColor,
      data: salesData[category] || [], // Default to an empty array if data is undefined
    })),
  };

  const pieData = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        data: products.map((product) => product.price),
        backgroundColor: products.map(getRandomColor),
        hoverBackgroundColor: products.map(getRandomColor),
      },
    ],
  };

  const lineData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Daily Sales",
        fill: false,
        lineTension: 0.1,
        backgroundColor: orangeHoverColor,
        borderColor: orangeColor,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: orangeColor,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: orangeColor,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [120, 150, 180, 200, 250, 300, 400],
      },
    ],
  };

  const doughnutData = {
    labels: products.map((product) => product.name),
    datasets: [
      {
        data: products.map((product) => product.price),
        backgroundColor: products.map(getRandomColor),
        hoverBackgroundColor: products.map(getRandomColor),
      },
    ],
  };

  const totalSales = categories.reduce((acc, category) => {
    return (
      acc + (salesData[category]?.reduce((sum, value) => sum + value, 0) || 0)
    );
  }, 0);

  const totalRevenue = products.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const totalProducts = products.length;

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-center text-orange-700">
        Sooriya Backers Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="p-4 bg-white border-2 border-orange-500 shadow-lg card">
          <h2 className="mb-2 text-lg font-semibold text-center text-orange-700">
            Total Sales
          </h2>
          <p className="text-2xl font-bold text-center text-gray-900">
            {totalSales}
          </p>
        </div>

        <div className="p-4 bg-white border-2 border-orange-500 shadow-lg card">
          <h2 className="mb-2 text-lg font-semibold text-center text-orange-700">
            Total Revenue
          </h2>
          <p className="text-2xl font-bold text-center text-gray-900">
            ${totalRevenue}
          </p>
        </div>

        <div className="p-4 bg-white border-2 border-orange-500 shadow-lg card">
          <h2 className="mb-2 text-lg font-semibold text-center text-orange-700">
            Total Products
          </h2>
          <p className="text-2xl font-bold text-center text-gray-900">
            {totalProducts}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <div className="p-4 bg-white border-2 border-orange-500 shadow-lg card">
          <h2 className="mb-2 text-xl font-semibold text-center text-orange-700">
            Weekly Sales Summary
          </h2>
          <div className="h-80">
            <Bar
              data={barData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="p-4 bg-white border-2 border-orange-500 shadow-lg card">
          <h2 className="mb-2 text-xl font-semibold text-center text-orange-700">
            Weekly Income
          </h2>
          <div className="h-80">
            <Pie
              data={pieData}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="p-4 bg-white border-2 border-orange-500 shadow-lg card">
          <h2 className="mb-2 text-xl font-semibold text-center text-orange-700">
            Daily Sales Trend
          </h2>
          <div className="h-80">
            <Line
              data={lineData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="p-4 bg-white border-2 border-orange-500 shadow-lg card">
          <h2 className="mb-2 text-xl font-semibold text-center text-orange-700">
            Product Prices Distribution
          </h2>
          <div className="h-80">
            <Doughnut
              data={doughnutData}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    position: "top",
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
