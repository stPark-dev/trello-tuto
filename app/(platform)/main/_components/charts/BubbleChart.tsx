import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

interface BubbleChartData {
  label: string;
  value: number;
}

interface BubbleChartProps {
  data: BubbleChartData[];
  width: number;
  height: number;
  onNewData: () => void; // Function to update data from the parent component
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data, width, height, onNewData }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current && data.length) {
      const svg = d3.select(ref.current)
        .attr('width', width)
        .attr('height', height);

      // Clear the SVG to prevent duplication
      svg.selectAll("*").remove();

      const pack = data => d3.pack()
        .size([width, height])
        .padding(3)(d3.hierarchy({children: data})
        .sum(d => d.value));

      const root = pack(data);

      const g = svg.append('g')
        .attr('transform', `translate(0,0)`);

      const bubble = g.selectAll('circle')
        .data(root.leaves(), (d: any) => d.data.id);

      bubble.enter()
        .append('circle')
        .merge(bubble)
        .transition().duration(750)
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .attr('r', d => d.r)
        .style('fill', 'steelblue');

      bubble.exit()
        .transition().duration(750)
        .attr('r', 0)
        .remove();

      const label = g.selectAll('text')
        .data(root.leaves(), (d: any) => d.data.id);

      label.enter()
        .append('text')
        .merge(label)
        .transition().duration(750)
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .style("font-size", 10)
        .text(d => d.data.id);

      label.exit()
        .remove();
    }
  }, [data, height, width]);

  useEffect(() => {
    const interval = setInterval(() => {
      onNewData();
    }, 3000);

    return () => clearInterval(interval);
  }, [onNewData]);

  return <svg ref={ref}></svg>;
};

export default BubbleChart;