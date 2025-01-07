import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { motion } from "framer-motion";

// Gerekli Chart.js bileşenlerini kaydet
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Reusable Chart Component
interface ChartProps {
  data: any; // Chart data
  options?: any; // Chart options (optional)
}

const LineChart: React.FC<ChartProps> = ({ data, options }) => {
  // Varsayılan opsiyonlar
  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Default Title',
      },
    },
  };

  return (  
    
      <Line data={data} options={options || defaultOptions} />
 
  );
};

export default LineChart;
