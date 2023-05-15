import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject Under Testing 

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Oviedo"
    const country = "España"

    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    //En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
    //Vamos a analizar suu estado en el "Assert"
    const {findAllByRole} = render(<CityInfo city={city} country={country}/>)

    // Assert
    //findAllByRole nos va a buscar (en este caso) todos los componentes
    // que sean "heading" => H1,H2,H3...
    //El resultado es una array de componentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")

    // ¿Cuando el test va a ser correcto?
    // Definición:
    //Cuando en el primer elemento (heading) se encuentre la ciudad "Oviedo"
    // y cuando en el segundo elemento se encuentre el pais España

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    //Si estas condiciones se cumplen (expect), el test esta "ok"
})