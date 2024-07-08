// src/components/ImpactChart.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ImpactChart = ({ data }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the existing chart before creating a new one
    }
    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((record) => record.actionName),
        datasets: [
          {
            label: 'Impact',
            data: data.map((record) => {
              switch (record.Impact) {
                case 'High': return 3;
                case 'Mid': return 2;
                case 'Low': return 1;
                default: return 0;
              }
            }),
            backgroundColor: data.map((record) => {
              switch (record.Impact) {
                case 'High': return 'rgba(255, 99, 132, 0.6)';
                case 'Mid': return 'rgba(54, 162, 235, 0.6)';
                case 'Low': return 'rgba(75, 192, 192, 0.6)';
                default: return 'rgba(201, 203, 207, 0.6)';
              }
            }),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Clean up on component unmount
      }
    };
  }, [data]); // Re-run the effect when data changes

  return (
    <div>
      <canvas ref={canvasRef} id="impactChart"></canvas>
    </div>
  );
};

export default ImpactChart;
