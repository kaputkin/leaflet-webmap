var map =
    L.map('my-map').setView([40.713435,-73.971291], 12);
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 0,
  	maxZoom: 20,
  	ext: 'png'}).addTo(map);

//create house icon
var houseIcon = L.icon({
    iconUrl: 'http://www.housingplusdevelopment.com/images/house.png',
    iconSize: [38, 95], // size of the icon
    popupAnchor: [0,-15]
    });

//variable for gif in popup
var customPopup = "My Home<br/><img src='https://media.giphy.com/media/lnQuWKUUt0kN2/giphy.gif' alt='maptime logo gif' width='350px'/>";

//sets width of gif and assigns classnames for CSS
var customOptions =
    {
    'maxWidth': '900',
    'className' : 'custom'
  };

//adds house circle and passes custom icon and custom popup with options
// L.marker([43.64701, -79.39425], {icon: firefoxIcon}).bindPopup(customPopup,customOptions).addTo(map);
var myhouse = L.circleMarker([40.697690, -73.910279], {icon: houseIcon}).bindPopup(customPopup, customOptions).addTo(map);

var treeArray = []  // empty array
treeData.forEach(function(treeObject) {
  var latlon = [treeObject.Latitude, treeObject.longitude];
  var options = {
    radius: 5,
    stroke: false,
    fillColor: 'rgb(18, 226, 33)',
  };

treeArray.push(L.circleMarker(latlon, options).bindPopup(treeData.health))
  });

var trees = treesLayerGroup = L.layerGroup(treeArray).addTo(map);

var treelayer = {
  "Trees": trees
};

var houselayer = {
  "My House": myhouse
};

L.control.layers(houselayer).addTo(map);
