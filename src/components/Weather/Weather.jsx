import React from 'react'
import PropTypes from 'prop-types'
import Grid  from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import { IconContext } from 'react-icons'
import IconState, {validValues} from '../IconState/IconState'



const Weather = ({temperature, state}) => {
  return (
    <Grid container item
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}>
      <IconContext.Provider value={{size:'6em'}}>
        {
          state ?
          <IconState state={state} />
          :
          <Skeleton variant="circular" height={80} width={80}></Skeleton>
        }
      </IconContext.Provider>
        {
          temperature ?
          <Typography display="inline" variant="h2">{temperature}</Typography>
          :
          <Skeleton variant="rectangular" height={80} width={80}></Skeleton>
        }
    </Grid>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues)
}

export default Weather