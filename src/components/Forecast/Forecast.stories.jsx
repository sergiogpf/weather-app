import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { hour: 18, state:"clear", temperature:17, weekDay:"Jueves"},
    { hour: 8, state:"clouds", temperature:11, weekDay:"Viernes"},
    { hour: 12, state:"drizzle", temperature:20, weekDay:"Viernes"},
    { hour: 19, state:"clouds", temperature:16, weekDay:"Viernes"},
    { hour: 14, state:"rain", temperature:13, weekDay:"Sábado"},
    { hour: 22, state:"rain", temperature:12, weekDay:"Sábado"}

]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)