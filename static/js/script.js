let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let markers = L.markerClusterGroup();
let circle_group = L.layerGroup();

function markersize(count) {
    return count * 950;
}

function determineColor(count) {
    if (count < 15000) {
        return 'green';
    } else if (count < 10000) {
        return 'yellow';
    } else if (count < 5000) {
        return 'orange';
    } else {
        return 'red';
    }
}

// Define the state data
var stateData = [
    {"State": "Washington", "Latitude": 47.7511, "Longitude": -120.7401, "Count": 15000},
    {"State": "Maryland", "Latitude": 39.0458, "Longitude": -76.6413, "Count": 9165},
    {"State": "Minnesota", "Latitude": 46.7296, "Longitude": -94.6859, "Count": 9161},
    {"State": "Ohio", "Latitude": 40.4173, "Longitude": -82.9071, "Count": 8995},
    {"State": "New York", "Latitude": 43.2994, "Longitude": -74.2179, "Count": 8923},
    {"State": "Texas", "Latitude": 31.9686, "Longitude": -99.9018, "Count": 7408},
    {"State": "Florida", "Latitude": 27.9944, "Longitude": -81.7603, "Count": 7315},
    {"State": "Kansas", "Latitude": 39.0119, "Longitude": -98.4842, "Count": 6145},
    {"State": "Wisconsin", "Latitude": 44.2685, "Longitude": -89.6165, "Count": 6126},
    {"State": "Maine", "Latitude": 45.2538, "Longitude": -69.4455, "Count": 6013},
    {"State": "Iowa", "Latitude": 41.878, "Longitude": -93.0977, "Count": 5672},
    {"State": "Hawaii", "Latitude": 20.7984, "Longitude": -156.3319, "Count": 5596},
    {"State": "Virginia", "Latitude": 37.4316, "Longitude": -78.6569, "Count": 5565},
    {"State": "Indiana", "Latitude": 39.7684, "Longitude": -86.1581, "Count": 5502},
    {"State": "South Carolina", "Latitude": 33.8361, "Longitude": -81.1637, "Count": 5471},
    {"State": "Massachusetts", "Latitude": 42.4072, "Longitude": -71.3824, "Count": 5465},
    {"State": "Arizona", "Latitude": 34.0489, "Longitude": -111.0937, "Count": 5462},
    {"State": "Utah", "Latitude": 39.3209, "Longitude": -111.0937, "Count": 5373},
    {"State": "Michigan", "Latitude": 44.3148, "Longitude": -85.6024, "Count": 5370},
    {"State": "Colorado", "Latitude": 39.5501, "Longitude": -105.7821, "Count": 5159},
    {"State": "Nebraska", "Latitude": 41.4925, "Longitude": -99.9018, "Count": 5107},
    {"State": "California", "Latitude": 36.7783, "Longitude": -119.4179, "Count": 5096},
    {"State": "Connecticut", "Count": 5053, "Latitude": 41.5999988, "Longitude": -72.6999972},
    {"State": "Georgia", "Count": 4978, "Latitude": 32.6781256, "Longitude": -83.2229757},
    {"State": "Vermont", "Count": 4845, "Latitude": 44.0001265, "Longitude": -72.7310415},
    {"State": "South Dakota", "Count": 4405, "Latitude": 44.5000003, "Longitude": -100.0000375},
    {"State": "Montana", "Count": 4264, "Latitude": 47.3752671, "Longitude": -109.6387575},
    {"State": "Missouri", "Count": 4195, "Latitude": 38.5739359, "Longitude": -92.6030189},
    {"State": "New Jersey", "Count": 3967, "Latitude": 40.1430058, "Longitude": -74.7311156},
    {"State": "New Hampshire", "Count": 3756, "Latitude": 44.0012306, "Longitude": -71.5799231},
    {"State": "Puerto Rico", "Count": 3589, "Latitude": 18.2208, "Longitude": -66.5901},
    {"State": "Idaho", "Count": 3468, "Latitude": 45.4945756, "Longitude": -114.1424303},
    {"State": "Alaska", "Count": 3205, "Latitude": 64.4459613, "Longitude": -149.6809095},
    {"State": "Rhode Island", "Count": 3112, "Latitude": 41.7000019, "Longitude": -71.5000004},
    {"State": "Oregon", "Count": 3049, "Latitude": 43.9792797, "Longitude": -120.737257},
    {"State": "Louisiana", "Count": 3010, "Latitude": 30.8703881, "Longitude": -92.007126},
    {"State": "West Virginia", "Count": 2974, "Latitude": 38.9201705, "Longitude": -80.1816905},
    {"State": "New Mexico", "Count": 2968, "Latitude": 34.3071443, "Longitude": -106.0180664},
    {"State": "Oklahoma", "Count": 2941, "Latitude": 35.3097654, "Longitude": -98.7165585},
    {"State": "Arkansas", "Count": 2940, "Latitude": 34.7999995, "Longitude": -92.1999975},
    {"State": "Pennsylvania", "Count": 2729, "Latitude": 41.2033216, "Longitude": -77.1945247},
    {"State": "Tennessee", "Count": 2725, "Latitude": 35.860119, "Longitude": -86.6601567},
    {"State": "Illinois", "Count": 2607, "Latitude": 40.079198, "Longitude": -89.433883},
    {"State": "North Carolina", "Count": 2551, "Latitude": 35.7821695, "Longitude": -80.7934575},
    {"State": "North Dakota", "Count": 2498, "Latitude": 47.6505894, "Longitude": -100.4370125},
    {"State": "Mississippi", "Count": 2438, "Latitude": 32.7501225, "Longitude": -89.7518089},
    {"State": "Kentucky", "Count": 2413, "Latitude": 37.8222935, "Longitude": -85.7682406},
    {"State": "Wyoming", "Count": 2410, "Latitude": 43.0759678, "Longitude": -107.2902839},
    {"State": "Delaware", "Count": 2155, "Latitude": 39.145251, "Longitude": -75.4189206},
    {"State": "Alabama", "Latitude": 32.8067, "Longitude": -86.7911, "Count": 1902},
    {"State": "Nevada", "Latitude": 38.8026, "Longitude": -116.4194, "Count": 1769}
];

for (let x = 0; x < stateData.length; x++) {
    let state = stateData[x];
    let stateName = state.State;
    let count = state.Count;
    let latitude = state.Latitude;
    let longitude = state.Longitude;

    markers.addLayer(L.marker([latitude, longitude]).bindPopup(stateName + " " + count));
    circle_group.addLayer(L.circle([latitude, longitude], {
        stroke: false,
        fillOpacity: 0.75,
        fillColor: determineColor(count),
        color: 'black',
        radius: markersize(count)
    }).bindPopup('<h1>' + stateName + "</h1> <hr> <h3>Death Toll: " + count + '</h3>'));
}

let myMap = L.map("map", {
    center: [30.7, -100.5],
    zoom: 4,
    layers: [street, markers, circle_group]
});

let baseMaps = {
    'Street Map': street
};
let overlayMaps = {
    'Cluster Map': markers,
    'Circle': circle_group
};

L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);