import React from 'react'
import AppFrame from './AppFrame'
import {  BrowserRouter as Router } from 'react-router-dom'


export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aspernatur delectus laboriosam nulla veritatis soluta esse sunt sit, corporis eos eveniet quae quasi cum dolorum amet deserunt iste minima molestiae.
        </AppFrame>
    </Router> 
)