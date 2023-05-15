const cities = [
    {city: "Oviedo", country: "España", countryCode: "ES"},
    {city: "Madrid", country: "España", countryCode: "ES"},
    {city: "Paris", country: "Francia", countryCode: "FR"},
    {city: "Londres", country: "Reino Unido", countryCode: "GB"}
  ]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)