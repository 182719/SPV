export {fetchPlanet};
const fetchPlanet = async (id) => {
    let fetchUrl = "https://spv-swapi.herokuapp.com//api/planets/" + id + "/";
    let imgUrl = "https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg";
    let returnPlanet = {};

    await fetch(fetchUrl)
        .then(resolve => {
            return resolve.json();
        })
        .then(data => {
            if (data.detail != null) {
                returnPlanet.name = data.name;
                returnPlanet.population = data.population;
                returnPlanet.imgUrl = imgUrl;
            } else {
                return false;
            }

        });

    return returnPlanet;
};