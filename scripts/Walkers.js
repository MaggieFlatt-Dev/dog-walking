import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()

//add event listener
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const cityId = clickTarget.dataset.city

        //find the whole walker object based on the walkerId from above
        const allCities = getCities()
        for (const city of allCities) {
            if (city.id === parseInt(cityId)) {
                window.alert(`This walker services ${city.name}`)
            }
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        //id and city are not unique enough so we add another dataset called data-type and assign it "walker"
        walkerHTML += `<li data-id="${walker.id}"
                            data-city="${walker.cityId}"
                            data-type="walker"
                            >${walker.name}
                        </li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

