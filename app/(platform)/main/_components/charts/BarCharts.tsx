"use client";
import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

interface BarChartProps {
  data: BarChartData[];
  width: number;
  height: number;
  onNewData: () => void; // Function to update data from the parent component
}

interface BarChartData {
  label: string;
  value: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, width, height, onNewData }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current && data.length) {
      const svg = d3.select(ref.current);
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      // Update the scales
      const x = d3.scaleBand()
          .domain(data.map(d => d.label))
          .rangeRound([margin.left, width - margin.right])
          .padding(0.1);

      const y = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)!])
          .range([height - margin.bottom, margin.top]);

      // Update the axes
      svg.select('.x-axis')
          .transition()
          .duration(750)
          .call(d3.axisBottom(x));

      svg.select('.y-axis')
          .transition()
          .duration(750)
          .call(d3.axisLeft(y));

      // Data join
      const bars = svg.select('.plot-area')
          .selectAll('rect')
          .data(data, (d: BarChartData) => d.label);

      // Exit
      bars.exit()
          .transition()
          .duration(750)
          .attr('y', y(0))
          .attr('height', 0)
          .remove();

      // Enter + Update
      bars.enter().append('rect')
          .attr('x', d => x(d.label)!)
          .attr('width', x.bandwidth())
          .merge(bars)
          .transition()
          .duration(750)
          .attr('y', d => y(d.value))
          .attr('height', d => y(0) - y(d.value))
          .attr('fill', 'steelblue');

    }
  }, [data]); // Re-run the effect when `data` changes

  useEffect(() => {
    // Set an interval to update the data every 2 seconds
    const interval = setInterval(() => {
      onNewData(); // Call the function passed in props to update data
    }, 3000);

    return () =>
    clearInterval(interval);
}, [onNewData]);

return (
  <svg ref={ref} width={width} height={height}>
    <g className="plot-area" />
    <g className="x-axis" transform={`translate(0,${height - 30})`} />
    <g className="y-axis" transform={`translate(${40},0)`} />
  </svg>
);
};

export default BarChart;