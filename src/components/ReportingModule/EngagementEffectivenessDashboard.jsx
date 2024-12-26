import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EngagementEffectivenessDashboard = ({ data = [] }) => {
  const chartData = {
    labels: data.map(item => item.method),
    datasets: [
      {
        label: 'Engagement Effectiveness',
        data: data.map(item => item.effectiveness),
        backgroundColor: 'rgba(99, 102, 241, 0.6)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif",
          },
          usePointStyle: true,
          padding: 20,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
    },
  };

  const averageEffectiveness = data.length > 0
    ? (data.reduce((acc, curr) => acc + curr.effectiveness, 0) / data.length).toFixed(1)
    : '0.0';

  const topMethod = data.length > 0
    ? data.reduce((a, b) => a.effectiveness > b.effectiveness ? a : b).method
    : 'No data available';

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight">
        Engagement Effectiveness Dashboard
      </h2>
      <div className="relative h-[400px] w-full mb-8">
        {data.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-lg">No data available</p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-sm font-semibold text-indigo-600 mb-2">Total Engagements</h3>
          <p className="text-3xl font-bold text-indigo-900">{data.length}</p>
        </div>
        <div className="bg-indigo-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-sm font-semibold text-indigo-600 mb-2">Average Effectiveness</h3>
          <p className="text-3xl font-bold text-indigo-900">
            {averageEffectiveness}%
          </p>
        </div>
        <div className="bg-indigo-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
          <h3 className="text-sm font-semibold text-indigo-600 mb-2">Top Method</h3>
          <p className="text-3xl font-bold text-indigo-900 truncate">
            {topMethod}
          </p>
        </div>
      </div>
    </div>
  );
};

EngagementEffectivenessDashboard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string.isRequired,
      effectiveness: PropTypes.number.isRequired,
    })
  ),
};

export default EngagementEffectivenessDashboard;