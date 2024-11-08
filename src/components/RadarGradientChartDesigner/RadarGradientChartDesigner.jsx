import React, {useRef, useEffect, useState} from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

import {Chart} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ArcElement
);

function RadialGradientRadarChart(props) {
    const dataProps = props?.data.originalData.data || {};
    const heightProps = props?.data?.originalData?.height || 700;
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    function createGradient(ctx, colorStart, colorMid, colorEnd) {
        // const chartWidth = chartArea.right - chartArea.left;
        // const chartHeight = chartArea.bottom - chartArea.top;
        //
        // const centerX = (chartArea.left + chartArea.right) / 2;
        // const centerY = (chartArea.top + chartArea.bottom) / 2;
        // const r = Math.min(
        //     (chartArea.right - chartArea.left) / 2,
        //     (chartArea.bottom - chartArea.top) / 2
        // );
        const gradient = ctx.createRadialGradient(350, 350, 0, 350, 350, 350);
        // const gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(0.5, colorMid);
        gradient.addColorStop(1, colorEnd);

        return gradient;
    }

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
            return;
        }

        const chartData = {
            type: 'polarArea',
            ...dataProps,
            datasets: dataProps.datasets.map(dataset => ({
                ...dataset,
                backgroundColor: createGradient(chart.ctx, dataset.c1, dataset.c2, dataset.c3),
            })),
            options: {
                plugins: {
                    legend: false,
                    tooltip: false,
                }
            },
        };

        setChartData(chartData);
    }, []);

    return (
        <div style={{height: `${heightProps}px`}}>
            <Chart type="polarArea" ref={chartRef} data={chartData}/>
        </div>
    );
}

export default RadialGradientRadarChart