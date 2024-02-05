import React from "react";
import Chart from "react-apexcharts";

export const Graph = () => {
  const chartData = {
    options: {
      colors: "#1db385",
      chart: {
        id: "basic-bar",
      },

      grid: {
        xais: {
          lines: {
            show: false,
          },
        },

        yaxis: {
          lines: {
            show: false,
          },
        },

        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: "#304758",
          },
        },
      },

      xais: {
        categories: [["Repair Advance"], ["Fuel Advance"], ["Salary Advance"]],
      },

      legend: {
        show: false,
      },
    },

    series: [
      {
        name: "Overall",
        data: [70, "40", 30],
      },
    ],
  };

  return (
    <div>
      <header>
        <div>
          <span>
            <img src="" alt="" />
          </span>
          <h3>Working Capital Service Request</h3>
        </div>

        <p>
          Ongoing gigmile working capital service requests{" "}
          <span>last 30 days</span>
        </p>
      </header>

      <div>
        <div>
          <img src="" alt="" />
        </div>
        <p>
          Overall: <span>678,765</span>
        </p>
      </div>

      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width={450}
          height={200}
        />
      </div>
    </div>
  );
};
