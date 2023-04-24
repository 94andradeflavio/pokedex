import React from "react"
import ReactApexChart from "react-apexcharts"
import { opacify } from 'polished'

const Chart = ({ category, baseStat, color }) => {
    const options = {
        title: {
          text: 'Pokémon Stats'
        },
        xaxis: {
          categories: category
        },
        colors: [color],
        fill: {
            colors: [opacify(.5, color)]
        },
        markers: {
            size: 3,
            strokeColor: ['#fff'],
            colors: [color],
            strokeWidth: 1,
        },
    }

    const series = [{
        name: 'Status',
        data: baseStat,
    }]

    return (
        <ReactApexChart 
            options={ options }
            series={series}
            type='radar'
            height={350} />
    )
}

export default Chart