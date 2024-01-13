import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'

const formatHourlyTime = (timestamp, timezone) => {
    const options = { hour: 'numeric', hour12: true , timeZone: timezone};
    return new Intl.DateTimeFormat('en-US', options).format(new Date(timestamp * 1000));
};

const kelvinToCelsius = (kelvin) => kelvin - 273.15;



const TempChart = ({ currentTemperature, forecastedTemperatures, forecastedTimes, timezone }) => {
    const labels = ['Now', ...forecastedTimes.map(time => formatHourlyTime(time, timezone))];
    const temperaturesInCelsius = [kelvinToCelsius(currentTemperature), ...forecastedTemperatures.map(temp => kelvinToCelsius(temp))];
    
    const chartData = {
        labels: labels,
        datasets: [
        {
            label: 'Temperature',
            data: temperaturesInCelsius,
            borderColor: 'rgba(237, 149, 17, 1)',
            fill: 'stack',
            backgroundColor: 'rgba(255, 173, 47, 0.8)',
        },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                type: 'category',
                labels: labels,
            },
            y: {
                // ... other y-axis configurations
            },
            },
    };

    return (
        <div>
        <Line data={chartData} options={options}/>
        </div>
    );
};

export default TempChart;