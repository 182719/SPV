"use strict";

import {fetchPlanet} from "./planetFetch.js";

class planetBox {

    constructor() {
        this.planets = [];
        this.addPlanetsToDocument();
        //this.loadMoreButton()
    }

    async fetchPlanets() {
        let numberOfPlanets = this.planets.length;
        for (let i = (numberOfPlanets + 1); i <= numberOfPlanets + 10; i++) {
            let planet = await fetchPlanet(i);
            if (planet !== false) {
                this.planets[i] = planet;
            }
        }
    }

    async addPlanetsToDocument() {
        await this.fetchPlanets();
        this.planets.forEach(planet => {

            let divTag = document.createElement('div');
            divTag.classList.add("planet");

            let headerTag = document.createElement('h2');
            headerTag.textContent = planet.name;
            headerTag.id = planet.name;

            let pTag = document.createElement('p');
            pTag.textContent = "Population: " + planet.population;
            pTag.id = "p" + planet.name;

            let imgTag = document.createElement('img');
            imgTag.src = planet.imgUrl;

            divTag.appendChild(imgTag);
            divTag.appendChild(headerTag);
            divTag.appendChild(pTag);
            document.body.appendChild(divTag);

            headerTag.addEventListener('click', (event) => {
                this.addAdditionalDetailsToCard(event)
            }, false);
        })
    };


    addAdditionalDetailsToCard(event) {
        let tag = event.target;

        let selectedPlanet;
        this.planets.forEach(planet => {
            if (planet.name === tag.id) {
                selectedPlanet = planet;
            }
        });

        document.getElementById("p" + selectedPlanet.name).textContent =
            " Population: " + selectedPlanet.population
            + " Climate: " + selectedPlanet.climate
            + " Terrain: " + selectedPlanet.terrain
            + " Diameter: " + selectedPlanet.diameter;

    };


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

    //This does not work properly yet.
    /*document.getElementById("loadMoreButton")
        .addEventListener('click', () => {
            pb.addPlanetsToDocument();
        }, false);

     */
};

window.addEventListener('DOMContentLoaded', init, false);