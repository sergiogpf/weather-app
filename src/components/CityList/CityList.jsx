import React from 'react'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import Grid  from '@mui/material/Grid'
import List  from '@mui/material/List'
import ListItemButton  from '@mui/material/ListItemButton'
import useCityList from '../../hooks/useCityList'
import CityInfo from './../CityInfo'
import Weather from '../Weather'
import { getCityCode } from './../../utils/utils'


// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const {city, countryCode, country} = cityAndCountry
    //const {temperature, state} = weather

    return (
        <ListItemButton
            button
            key={getCityCode(city, countryCode)}
            onClick={() =>  eventOnClickCity(city, countryCode)}>
            <Grid container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item
                    md={9}
                    xs={12}>
                        <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    <Weather 
                        temperature={weather && weather.temperature} 
                        state={weather && weather.state}/>
                </Grid>
            </Grid>
            
        </ListItemButton>
    )
}


//cities: es un array y en cada item tiene que tener la ciudad, pero además el country
const CityList = ({cities, onClickCity, actions, data}) => {

    const { allWeather } = data
    const { onSetAllWeather } = actions

    const { error, setError} = useCityList(cities, allWeather, onSetAllWeather)

    //const weather = {temperature: 11, state: "sunny"}
  return (
    <div>
        {
            error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
        }
        <List>
            {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
            }
        </List>
    </div> 
  )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList