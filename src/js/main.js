function initMap() {
  const url = '/data/locations.json';
  const norwalk = { lat: 41.113876, lng: -73.415602 };
  const mapElem = document.getElementById('map');
  const map = new google.maps.Map(mapElem, { zoom: 14, center: norwalk });

  // This function uses a callback
  getFavoritePlaces(url, (e) => {

    // If the call has succeeded then you will have a status of 200.
    if (e.srcElement.status === 200) {
      const places = JSON.parse(request.response);
      addPlacesOnMap(places, map);
    } else {
      alert('something went wrong');
      console.log(e);
    }
  });
}

// Create a marker and show it on the map.
const addPlacesOnMap = (places, map) => {
  places.forEach(place => {
    const location = { lat: place.coordinates.lat, lng: place.coordinates.lng };
    new google.maps.Marker({ position: location, map: map, title: place.name });
  });
}

// XMLHttpRequest will work in all the browsers without using an additional library.
const getFavoritePlaces = (url, onResponse) => {
  request = new XMLHttpRequest();
  request.addEventListener('load', onResponse);

  request.open('GET', url);
  request.send();
}
