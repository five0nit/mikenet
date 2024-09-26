import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Average Prices by Service',
    },
  },
};

const data = {
  labels: ['Hot Water Heat Pumps', 'Solar Installation', 'Home Battery Installations', 'Reverse Cycle Split System Installations'],
  datasets: [
    {
      label: 'Average Price',
      data: [3000, 10000, 12000, 5000],
      backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
    },
  ],
};

function PriceChart() {
  return <Bar options={options} data={data} />;
}

export default PriceChart;
