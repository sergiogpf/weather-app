import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions"

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Oviedo", country: "España"},
    {city: "Madrid", country: "España"},
    {city: "Paris", country: "Francia"},
    {city: "Londres", country: "Reino Unido"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")}/>