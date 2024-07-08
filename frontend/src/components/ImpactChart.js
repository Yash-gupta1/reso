// src/components/ImpactChart.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
Chart.register(...registerables);

const ImpactChart = ({ data }) => {
  const chartRef = useRef(null);

  // Prepare the data for the chart
  const chartData = {
    labels: data.map((record) => record.actionName),
    datasets: [
      {
        label: 'Impact',
        data: data.map((record) => record.Impact === 'High' ? 3 : record.Impact === 'Mid' ? 2 : 1),
        backgroundColor: data.map((record) => {
          if (record.Impact === 'High') return 'rgba(255, 99, 132, 0.6)';
          if (record.Impact === 'Mid') return 'rgba(54, 162, 235, 0.6)';
          return 'rgba(75, 192, 192, 0.6)';
        }),
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Bar ref={chartRef} data={chartData} />
    </div>
  );
};

export default ImpactChart;
