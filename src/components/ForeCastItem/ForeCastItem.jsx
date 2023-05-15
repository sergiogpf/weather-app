import React from 'react'
import PropTypes from 'prop-types'
import Typography  from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { IconContext } from 'react-icons'
import IconState, {validValues} from '../IconState/IconState'



const ForeCastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center">
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour}:00</Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={{size:'5em'}}>
                    <IconState state={state} />
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography>{temperature}°</Typography>
            </Grid>
    </Grid>
  )
}

ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired
}

export default ForeCastItem