import { Tooltip } from "antd";
import React from "react";

export default function MostOrderedChart({ most_ordered_chart }) {
  const max = Math.max(...most_ordered_chart?.map((bar) => bar.count));
  const counter = 10 ** (max.toString().split("").length - 1);
  //   const total = Math.ceil(max / counter) * counter * 1.1;
  const total = most_ordered_chart
    .map((bar) => bar.count)
    .reduce((a, b) => a + b);
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 42 42"
      className="most-ordered-chart"
    >
      {most_ordered_chart?.map((bar, id) => (
        <g key={id}>
          <circle cx="21" cy="21" r={19 - id * 2.5} fill="transparent"></circle>
          <circle
            cx="21"
            cy="21"
            r={19 - id * 2.5}
            fill="transparent"
            stroke={`#ffffff${id % 2 ? "14" : "2b"}`}
            strokeWidth="2.5"
          ></circle>
          <Tooltip
            title={`${bar.title.toUpperCase()}, ${bar.count}`}
            color={bar.color}
          >
            <circle
              cx="21"
              cy="21"
              r={19 - id * 2.5}
              fill="transparent"
              stroke={bar.color}
              strokeWidth="2.5"
              strokeDasharray={`${(bar.count * 100) / total} 0 0 ${
                ((total - bar.count) * 100) / total
              }`}
              strokeDashoffset={id * 11.7 + 10}
              strokeLinecap="round"
            ></circle>
          </Tooltip>
        </g>
      ))}

      <g>
        <circle
          cx="21"
          cy="21"
          r={19 - most_ordered_chart.length * 2.5}
          fill="transparent"
        ></circle>
        <circle
          cx="21"
          cy="21"
          r={19 - most_ordered_chart.length * 2.5}
          fill="transparent"
          stroke={`#ffffff${most_ordered_chart.length % 2 ? "14" : "2b"}`}
          strokeWidth="2.5"
        ></circle>
      </g>
    </svg>
  );
}
