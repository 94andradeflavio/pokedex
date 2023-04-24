import React from "react"
import ReactApexChart from "react-apexcharts"
import { opacify, darken } from 'polished'

const Chart = ({ category, baseStat, color }) => {
    const options = {
        title: {
          text: 'Pokémon Stats'
        },
        xaxis: {
          categories: category ? category : []
        },
        yaxis: {
            show: false,
            floating: true,
            labels: {
                align: 'right'
            }
        },
        colors: [darken(.1, color)],
        fill: {
            colors: [opacify(.5, color)]
        },
        markers: {
            size: 3,
            strokeColor: ['#fff'],
            colors: [color],
            strokeWidth: 1,
        },
        dataLabels: {
            enabled: true,
            background: {
                enabled: true,
                borderRadius:2,
            }
        }
    }

    const series = [{
        name: 'Status',
        data: baseStat ? baseStat : [],
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