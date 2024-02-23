import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

interface DonutChartData {
  label: string;
  value: number;
}

interface DonutChartProps {
  data: DonutChartData[];
  width: number;
  height: number;
  onNewData: () => void; // Function to update data from the parent component
}

const DonutChart: React.FC<DonutChartProps> = ({ data, width, height, onNewData }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height)
      .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
      .style("font", "10px sans-serif");

    svg.selectAll("*").remove();

    const radius = Math.min(width, height) / 2;
    const arc = d3.arc<d3.PieArcDatum<DonutChartData>>().innerRadius(radius * 0.67).outerRadius(radius - 1);
    const pie = d3.pie<DonutChartData>().sort(null).value(d => d.value);

    // This function helps animate the transition of the arcs
    function arcTween(a, i) {
      let oi = d3.interpolate({ startAngle: 0, endAngle: 0 }, a);
      function tween(t) {
        const b = oi(t);
        return arc(b);
      }
      if (this._current) { // If there is a current attribute, interpolate from it
        oi = d3.interpolate(this._current, a);
      }
      this._current = oi(1); // Update the current attribute with the new data
      return tween;
    }

    const arcs = pie(data);
    const path = svg.append("g")
      .attr("stroke", "white")
      .selectAll("path")
      .data(arcs)
      .join("path")
        .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
        .each(function(d) { this._current = d; }) // Store the initial angles
        .attr("d", arc);

    // Apply the transition
    path.transition()
      .duration(750)
      .attrTween("d", arcTween);

    // Add titles for accessibility
    path.append("title")
      .text(d => `${d.data.label}: ${d.data.value.toLocaleString()}`);

    // Handle labels
    svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(arcs)
      .join("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .call(text => text.append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.label))
        .call(text => text.append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => d.data.value.toLocaleString()));
  }, [data, height, width]);

  useEffect(() => {
    const interval = setInterval(onNewData, 3000);
    return () => clearInterval(interval);
  }, [onNewData]);

  return <svg ref={ref}></svg>;
};

export default DonutChart;