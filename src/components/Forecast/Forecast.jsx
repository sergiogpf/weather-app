import React from 'react'
import PropTypes from 'prop-types'
import Grid  from '@mui/material/Grid'
import ForeCastItem from '../ForeCastItem/ForeCastItem'
import {validValues} from '../IconState/IconState'


const renderForecastItem = forecast => {
    const {weekDay, hour, state, temperature} = forecast
    //Hay que poner un identificador único key
    //Ponemos una "marca" para encontrar cada item (ForeCastItem) ' data-testid="forecast-item-container" '
    return (
        <Grid 
            data-testid="forecast-item-container" 
            item key={`${weekDay}${hour}`}>
            <ForeCastItem 
                hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}
            ></ForeCastItem>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container
        justifyContent="space-around"
        alignItems="center">
         {
            forecastItemList.map(forecast => renderForecastItem(forecast))
         }
    </Grid>
  )
}

// forecastItemList es un array de elementos
// los elementos deben tener una "forma" particular
// las siguientes propiedades: 
/*
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired
*/
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired
    })).isRequired
}

export default Forecast