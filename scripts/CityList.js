import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

// When city is clicked:
// 1. Get city name from data attribute
// 2. Find city object with that name
// 3. Get city ID
// 4. Find walkers with that cityId
// 5. Get walker names
// 6. Show alert

document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target

        if (cityTarget.dataset.type === "city") {
        const cityId = parseInt(cityTarget.dataset.cityid)
        let walkerNames = ""

        for (const walker of walkers)
            if (walker.cityId === cityId)
                walkerNames += walker.name + " , "

    window.alert(`${walkerNames} is servicing this city.`)    
    }
}
)

export const CityList = () => {
    let citiesHTML = "<ul>"
    let addedCities = []

    for (const walker of walkers) {
       let cityName, cityId //cityName = "" and cityId = 0 can be written as well
       for (const city of cities) {
        if (city.id === walker.cityId) {
            cityName = city.name
            cityId = city.id
            }
        }

        if (!addedCities.includes(cityName)){
            addedCities.push(cityName)
            citiesHTML += `<li data-type="city" data-type="walker" data-cityId=${cityId}
            data-cityName=${cityName}
            >${cityName}</li>`
        }
    }

    citiesHTML += "</ul>"
    return citiesHTML
}

