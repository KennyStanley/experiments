class StarWarsApiAdapter {
    async fetchPlanets() {
        const res = await fetch('http://swapi.dev/api/planets/');
        return res.json();
    }

    async fetchPeople() {
        const res = await fetch('http://swapi.dev/api/people/');
        return res.json();
    }
}

export const starWarsApiAdapter = new StarWarsApiAdapter()