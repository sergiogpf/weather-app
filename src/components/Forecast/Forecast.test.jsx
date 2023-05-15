import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'


const forecastItemList = [
    { hour: 18, state:"clear", temperature:17, weekDay:"Jueves"},
    { hour: 8, state:"clouds", temperature:11, weekDay:"Viernes"},
    { hour: 12, state:"drizzle", temperature:20, weekDay:"Viernes"},
    { hour: 19, state:"clouds", temperature:16, weekDay:"Viernes"},
    { hour: 14, state:"rain", temperature:13, weekDay:"Sábado"},
    { hour: 22, state:"rain", temperature:12, weekDay:"Sábado"}

]

test('Forecast render ', async() => { 
    // ¿Cómo encontrar los items?
    // findAllByTestId nos permite encontrar cada item con esa marca
    const { findAllByTestId } = render(
            <Forecast 
                forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
 })