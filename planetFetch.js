export {fetchPlanet};
const fetchPlanet = async (id) => {
    let fetchUrl = "https://spv-swapi.herokuapp.com/api/planets/" + id + "/";
    let imgUrl = "https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg";
    let returnPlanet = {};

    await fetch(fetchUrl)
        .then(resolve => {
            return resolve.json();
        })
        .then(data => {
            if (data.detail !== "Not found.") {
                returnPlanet.name = data.name;
                returnPlanet.population = data.population;
                returnPlanet.imgUrl = imgUrl;
                returnPlanet.climate = data.climate;
                returnPlanet.terrain = data.terrain;
                returnPlanet.diameter = data.diameter;
            } else {
                return false;
            }

        });

    return returnPlanet;
};