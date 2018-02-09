var map = L.map('my-map').setView([40.713435,-73.971291], 12);
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 0,
  	maxZoom: 20,
  	ext: 'png'
  }).addTo(map);

  
// how to add a single marker using L.marker()
// var chrisPizza = pizzaData[0];
//
// L.marker([chrisPizza.lat, chrisPizza.lon]).addTo(map)
//     .bindPopup(chrisPizza.name + ' likes to eat at ' +  chrisPizza.pizzaShop);
// loop to add a marker for each object in the array
treeData.forEach(function(treeObject) {
  var latlon = [treeObject.Latitude, treeObject.longitude];
  var options = {
    radius: 5,
    stroke: false,
    fillColor: 'rgb(18, 226, 33)',
  }
  L.circleMarker(latlon, options).addTo(map)
      // .bindPopup(pizzaObject.name + ' likes to eat at ' +  pizzaObject.pizzaShop);
});
