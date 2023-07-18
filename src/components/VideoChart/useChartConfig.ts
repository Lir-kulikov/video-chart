import { ChartData, ChartOptions } from "chart.js";

export function useChartConfig(duration: number) {
  const elements = Array.from(Array(duration).keys());
  const data: ChartData<"line", { x: number; y: number }[]> = {
    labels: elements,
    datasets: [
      {
        backgroundColor: "slateblue",
        data: elements.map((v) => ({ x: v, y: 1 })),
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: -50,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          count: 1,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return { options, data };
}
