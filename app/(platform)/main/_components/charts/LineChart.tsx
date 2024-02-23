import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

interface LineChartProps {
  data: LineChartData[];
  width: number;
  height: number;
  onNewData: () => void; // Function to update data from the parent component
}

interface LineChartData {
  label: string;
  value: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, width, height, onNewData }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current && data.length) {
      const svg = d3.select(ref.current);
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      // Scales
      const x = d3.scalePoint()
        .domain(data.map(d => d.label))
        .range([margin.left, width - margin.right])
        .padding(0.5);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)!])
        .range([height - margin.bottom, margin.top]);

      // Axes
      svg.select('.x-axis')
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .transition()
        .duration(750)
        .call(d3.axisBottom(x));

      svg.select('.y-axis')
        .attr("transform", `translate(${margin.left},0)`)
        .transition()
        .duration(750)
        .call(d3.axisLeft(y));

      // Line generator
      const line = d3.line<LineChartData>()
        .x(d => x(d.label)!)
        .y(d => y(d.value));

      // Data join for the line
      const path = svg.selectAll('.line-path')
        .data([data], d => d.label);

      // Update the line path
      path.enter()
        .append('path')
          .attr('class', 'line-path')
          .attr('d', line)
          .attr('fill', 'none')
          .attr('stroke', 'steelblue')
          .attr('stroke-width', 2)
        .merge(path)
          .transition()
          .duration(750)
          .attr('d', line);

      // Exit
      path.exit().remove();
    }
  }, [data]); // Re-run the effect when `data` changes

  useEffect(() => {
    // Set an interval to update the data every 3 seconds
    const interval = setInterval(() => {
      onNewData(); // Call the function passed in props to update data
    }, 3000);

    return () => clearInterval(interval);
  }, [onNewData]);

  return (
    <svg ref={ref} width={width} height={height}>
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default LineChart;