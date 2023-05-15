import React from "react"
import { render, fireEvent } from "@testing-library/react"
import CityList from "./CityList"

const cities = [
    {city: "Oviedo", country: "España", countryCode: "ES"},
    {city: "Madrid", country: "España", countryCode: "ES"},
    {city: "Paris", country: "Francia", countryCode: "FR"},
    {city: "Londres", country: "Reino Unido", countryCode: "GB"}
]

test("CityList renders", async () => {
    
const {findAllByRole} = render(<CityList cities={cities} />)

const items = await findAllByRole("button")

expect(items).toHaveLength(4)

})

test("CityList click on item", async() => {
    //Debemos simular una acción del usuario: click sobre un item
    //para eso vamos a utilizar una función "mock"
    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("button")

    //Ahora, para simular la acción, vamos a utilizar fireEvent
    //fireEvent es parte de la librería testing-library/react

    fireEvent.click(items[0])

    //Con esto se debe de haber llamado a la función fnClickOnItem una única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})