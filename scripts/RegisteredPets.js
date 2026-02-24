import { getPets, getWalkers} from "./database.js"

const pets = getPets()

//create event listener
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target

        if (clickTarget.dataset.type === "pet") {
            const walkerId = clickTarget.dataset.walkerforeignkey

        //find the whole walker object based on the walkerId from above
        const allWalkers = getWalkers()
        for (const walker of allWalkers) {
            if (walker.id === parseInt(walkerId)) {
                window.alert(`This pet is being walked by ${walker.name}`)
            }
        }
    }
}
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        //add state item of walkerForeignKey to be able to use for event listener later
        petHTML += `<li data-walkerForeignKey="${pet.walkerId}" data-type="pet">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

