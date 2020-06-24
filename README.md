# Introduction
On the map show places loaded from a JSON file as markers. You can also use [Info Windows](https://developers.google.com/maps/documentation/javascript/infowindows) to display additional information when the marker is clicked. You can use [custom markers](https://developers.google.com/maps/documentation/javascript/custom-markers) instead of the default one provided by Google.

## Implementation
Places are stored in a JSON file located in the /src/data/location.json file. The code uses [XMLHttpRequest](https://caniuse.com/#search=xmlhttprequest) which works in all the browsers.