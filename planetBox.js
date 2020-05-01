"use strict";

import {fetchPlanet} from "./planetFetch.js";

class planetBox {

    constructor() {
        this.planets = [];
        this.numberOfLoadedPlanets = this.planets.length;
        this.addPlanetsToDocument();
        this.loadMoreButton()
    }

    async fetchPlanets() {
        for (let i = this.numberOfLoadedPlanets + 1; i <= this.numberOfLoadedPlanets + 10; i++) {
            let planet = await fetchPlanet(i);
            if (planet !== false) {
                this.planets[i] = planet;
            }
        }
        this.numberOfLoadedPlanets = this.planets.length;
    }

    async addPlanetsToDocument() {
        await this.fetchPlanets();
        this.planets.forEach(planet => {
            let divTag = document.createElement('div');
            divTag.classList.add("planet");
            let pTag = document.createElement('p');
            pTag.textContent = "Name: " + planet.name + " Population: " + planet.population;
            let imgTag = document.createElement('img');
            imgTag.src = planet.imgUrl;
            pTag.id = planet.name;
            divTag.appendChild(imgTag);
            divTag.appendChild(pTag);
            document.body.appendChild(divTag);

            pTag.addEventListener('click', (event) => {
                let tag = event.target;

                let selectedPlanet;
                this.planets.forEach(planet => {
                    if (planet.name === tag.id) {
                        selectedPlanet = planet;
                    }
                });
                tag.textContent =
                    "Name: " + selectedPlanet.name
                    + " Population: " + selectedPlanet.population
                    + " Climate: " + selectedPlanet.climate
                    + " Terrain: " + selectedPlanet.terrain
                    + " Diameter: " + selectedPlanet.diameter;
            });
        })
    }

    loadMoreButton() {
        let loadMoreButton = document.createElement('button');
        loadMoreButton.textContent = "Load more planets";
        loadMoreButton.type = "Button";
        loadMoreButton.id = "loadMoreButton";

        document.body.appendChild(loadMoreButton);
    }
}

const init = () => {
    let pb = new planetBox();
    document.getElementById("loadMoreButton")
        .addEventListener('click', () => {
            pb.addPlanetsToDocument();
        }, false);
};

window.addEventListener('DOMContentLoaded', init, false);