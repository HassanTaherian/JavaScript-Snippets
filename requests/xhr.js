// Init a XHR object
const fetchPlanets = new XMLHttpRequest();

// Give a callback for success of request(we can use addEventListener either)
fetchPlanets.onload =  function() {
  const data = JSON.parse(this.response);
  data.results.forEach((planet, index) => {
    console.log(planet.name, index)
  })
  const nextPlanets = data.next;

  // Nested Request (XHR Hell)
  const nextPlanetsRequests = new XMLHttpRequest();
  nextPlanetsRequests.addEventListener('load', function() {
    const data = JSON.parse(this.response);
    data.results.forEach((planet, index) => {
      console.log(planet.name, index)
    })
  })

  nextPlanetsRequests.addEventListener('error', function () {
    console.log('Cannot get next planets!'.toUpperCase())
  })

  nextPlanetsRequests.open('GET', nextPlanets);
  nextPlanetsRequests.send()
}

fetchPlanets.onerror = function () {
  console.log('Something went Wrong!');
}

// Open a request
fetchPlanets.open('GET', 'https://swapi.dev/api/planets/');

// Send request to server
fetchPlanets.send();