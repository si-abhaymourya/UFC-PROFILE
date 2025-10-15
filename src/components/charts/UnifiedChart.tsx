'use client';

import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export type ChartType = 'bar' | 'doughnut' | 'pie';

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    borderSkipped?: boolean;
  }[];
}

interface UnifiedChartProps {
  type: ChartType;
  title: string;
  data: ChartData;
  showLegend?: boolean;
  cutout?: string;
  stats?: {
    landed?: number;
    attempted?: number;
    accuracy?: number;
  };
  statsLabels?: {
    landed?: string;
    attempted?: string;
    accuracy?: string;
  };
  className?: string;
}

export default function UnifiedChart({
  type,
  title,
  data,
  showLegend = false,
  cutout = '65%',
  stats,
  statsLabels,
  className = ''
}: UnifiedChartProps) {
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: 'bottom' as const,
        labels: {
          color: '#6b7280',
          padding: 20,
          font: {
            size: 12,
            weight: 'bold' as const,
          }
        },
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#f3f4f6',
        bodyColor: '#f3f4f6',
        borderColor: '#374151',
        borderWidth: 1,
      }
    },
  };

  const barOptions = {
    ...commonOptions,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#374151',
        },
        ticks: {
          color: '#9ca3af',
          font: {
            size: 11,
          }
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9ca3af',
          font: {
            size: 11,
            weight: 'bold' as const,
          }
        },
      },
    },
  };

  const doughnutOptions = {
    ...commonOptions,
    cutout: cutout,
  };

  const pieOptions = {
    ...commonOptions,
  };

  const getOptions = () => {
    switch (type) {
      case 'bar':
        return barOptions;
      case 'doughnut':
        return doughnutOptions;
      case 'pie':
        return pieOptions;
      default:
        return commonOptions;
    }
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={data} options={getOptions()} />;
      case 'doughnut':
        return <Doughnut data={data} options={getOptions()} />;
      case 'pie':
        return <Pie data={data} options={getOptions()} />;
      default:
        return null;
    }
  };

  const renderStats = () => {
    if (!stats || !statsLabels) return null;

    return (
      <div className="space-y-4 flex-1">
        {stats.landed !== undefined && (
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <span className="text-gray-300">{statsLabels.landed}</span>
            <span className="text-white font-bold text-lg">
              {stats.landed.toLocaleString()}
            </span>
          </div>
        )}
        {stats.attempted !== undefined && (
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <span className="text-gray-300">{statsLabels.attempted}</span>
            <span className="text-white font-bold text-lg">
              {stats.attempted.toLocaleString()}
            </span>
          </div>
        )}
        {stats.accuracy !== undefined && (
          <div className="flex justify-between items-center py-3">
            <span className="text-gray-300">{statsLabels.accuracy}</span>
            <span className="text-red-500 font-bold text-lg">{stats.accuracy}%</span>
          </div>
        )}
      </div>
    );
  };

  const isDoughnutWithStats = type === 'doughnut' && stats && statsLabels;

  return (
    <div className={`gradient-card p-6 rounded-2xl hover-lift shadow-ufc border border-gray-700 ${className}`}>
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
        <div className="w-2 h-6 bg-red-600 rounded-full"></div>
        {title}
      </h3>
      
      {isDoughnutWithStats ? (
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 flex-shrink-0">
            {renderChart()}
          </div>
          {renderStats()}
        </div>
      ) : (
        <div className="chart-container">
          {renderChart()}
        </div>
      )}
    </div>
  );
}
