import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

//findByText permite encontrar un componente por el texto que muestra
test("WeatherDetails render", async () => {
    const { findByText} = render(<WeatherDetails wind={10} humidity={33}/>)

    const wind = await findByText(/10/)

    const humidity = await findByText(/33/)

    expect(wind).toHaveTextContent("Viento: 10km/h")
    expect(humidity).toHaveTextContent("Humedad: 33%")

})