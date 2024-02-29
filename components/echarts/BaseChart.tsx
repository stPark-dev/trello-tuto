import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts'; // 사용할 차트 타입에 따라 import
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
    DataZoomComponent,
    ToolboxComponent,
    VisualMapComponent
} from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

// ECharts에 필요한 컴포넌트 등록
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    LineChart,
    PieChart,
    LegendComponent,
    DataZoomComponent,
    ToolboxComponent,
    VisualMapComponent,
    SVGRenderer
]);

interface ChartProps {
    chartCls?: string;
    chartStatus?: string;
    theme?: 'light' | 'dark';
    backgroundColor?: string;
    chartOption?: any;
    grid?: any;
    dataset?: any[];
    datasetSource?: any[];
    series?: any[];
    seriesType?: string;
    seriesLabelShow?: boolean;
    xFields?: string;
    yFields?: string[];
    yFieldsName?: string[];
    seriesShowSymbol?: boolean;
    seriesSmooth?: boolean;
    seriesAreaStyle?: any;
    seriesAreaStyleShow?: boolean;
    seriesAreaStyleOpacity?: number;
    seriesStep?: boolean;
    seriesShowBackground?: boolean;
    seriesColorBy?: string;
    xAxis?: any;
    xAxisShow?: boolean;
    xAxisType?: string;
    xAxisAxisLabel?: any;
    xAxisSplitLineShow?: boolean;
    xAxisBoundaryGap?: boolean;
    xAxisAxisLabelFormatter?: string;
    xAxisAxisLabelInterval?: number;
    xAxisAxisLabelRotate?: number;
    xAxisName?: string;
    yAxis?: any;
    yAxisShow?: boolean;
    yAxisType?: string;
    yAxisAxisLabel?: any;
    yAxisAxisLineShow?: boolean;
    yAxisAxisTickShow?: boolean;
    yAxisMin?: boolean;
    yAxisAxisLineLineStyle?: any;
    yAxisName?: string;
    startValue?: number;
    excessValue?: number;
    title?: any[];
    titleStyleTpl?: string;
    titleText?: string;
    pieCenterTitle?: string;
    pieCenterTitleFontSize?: number;
    toolbox?: any;
    toolboxShow?: boolean;
    toolboxFeature?: any;
    toolboxFeatureMagicTypeShow?: boolean;
    toolboxFeatureSaveAsImageShow?: boolean;
    tooltip?: any;
    tooltipShow?: boolean;
    tooltipFormatter?: any;
    legend?: any;
    legendShow?: boolean;
    legendTop?: string;
    dataZoom?: any;
    dataZoomShow?: boolean;
    dataZoomRange?: number[];
    color?: string[];
    precision?: number;
}
const EChartsBase: React.FC<ChartProps> = (props) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartInstance, setChartInstance] = useState<echarts.ECharts | null>(null);

    useEffect(() => {
        if (chartRef.current && !chartInstance) {
            const initializedInstance = echarts.init(chartRef.current, props.theme);
            setChartInstance(initializedInstance);
        }

        return () => {
            chartInstance?.dispose();
        };
    }, [chartInstance, props.theme]);

    useEffect(() => {
        if (chartInstance) {
            const option = {
                backgroundColor: props.backgroundColor || '#FFFFFF',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: props.xAxis,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        
                    }
                ],
                series: [
                    {
                        name: 'Direct Visit',
                        type: 'bar',
                        barWidth: '60%',
                        data: props.dataset
                    }
                ],
            };
            chartInstance.setOption(option);
        }
    }, [props, chartInstance]);

    return (
        <div ref={chartRef} style={{ width: '100%', height: '380px' }}></div>
    );
};

export default EChartsBase;
