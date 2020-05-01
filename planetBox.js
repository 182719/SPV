import {fetchPlanet} from "./planetFetch.js";

class planetBox {

    constructor() {
        this.planets = [];
        for (let i = 0; i < 11; i++) {
            let planet = fetchPlanet(i);
            if (planet !== false) {
                this.planets[i] = planet;
            }
        }
        this.writePlanets();

    }

    writePlanets() {
        for (const planet in this.planets) {
            let div = document.createElement('div');
            div.classList.add("planet");
            let pTag = document.createElement('p');
            pTag.textContent = "Name: " + planet.name + "/n Population: " + planet.population;
            let img = document.createElement('img');
            img.src = planet.imgUrl;

            pTag.appendChild(img);
            div.appendChild(pTag);

        }


    }
}

const init = () => {
    new planetBox();
};

window.addEventListener('DOMContentLoaded', init, false);