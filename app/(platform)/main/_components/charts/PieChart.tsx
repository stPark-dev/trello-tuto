import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

interface PieChartProps {
  data: PieChartData[];
  width: number;
  height: number;
  onNewData: () => void; // Function to update data from the parent component
}

interface PieChartData {
  label: string;
  value: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, width, height, onNewData }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current && data.length) {
      const svg = d3.select(ref.current)
        .attr('width', width)
        .attr('height', height);

      // Define the radius, pie layout, and arc generator
      const radius = Math.min(width, height) / 2;
      const pie = d3.pie<PieChartData>().value(d => d.value);
      const arc = d3.arc<d3.PieArcDatum<PieChartData>>()
        .innerRadius(0)
        .outerRadius(radius);

      // Compute the pie slices
      const arcs = pie(data);

      // Transform the group to the middle of the SVG
      svg.selectAll('g').data([null]).join('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

      // Join the arc data to path elements, and use the arc generator to draw
      const path = svg.select('g').selectAll('path')
        .data(arcs, (d: any) => d.data.label);

      path.enter()
        .append('path')
        .merge(path)
        .transition().duration(750)
        .attrTween('d', function(d) {
          const i = d3.interpolate(this._current, d);
          this._current = i(0);
          return (t: any) => arc(i(t));
        })
        .attr('fill', (d, i) => d3.schemeCategory10[i % 10]);

      path.exit().transition().duration(750)
        .attrTween('d', function(d) {
          const i = d3.interpolate(this._current, {startAngle: 0, endAngle: 0});
          return (t: any) => arc(i(t));
        })
        .remove();

      // Labels (Optional: You can add transition for labels similarly if needed)
      const text = svg.select('g').selectAll('text')
        .data(arcs, (d: any) => d.data.label);

      text.enter()
        .append('text')
        .merge(text)
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text(d => d.data.label);

      text.exit().remove();
    }
  }, [data, height, width]);

  useEffect(() => {
    // Set an interval to update the data every 3 seconds
    const interval = setInterval(() => {
      onNewData(); // Call the function passed in props to update data
    }, 3000);

    return () => clearInterval(interval);
  }, [onNewData]);

  return <svg ref={ref}></svg>;
};

export default PieChart;
