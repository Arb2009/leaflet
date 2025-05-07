// var map = L.map('map').setView([42.660607117451065, 21.16330624770136], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// L.marker([42.541630, 20.286049]).addTo(map);



var littleton = L.marker([42.6330125010515, 21.15192155374466]).bindPopup('This is Albi Mall.'),
    denver    = L.marker([42.56468276478752, 21.133789251128654]).bindPopup('This is Prishtina Mall.'),
    aurora    = L.marker([42.65662848419542, 21.160342895463245]).bindPopup('This is Katedralja Nene Tereza.'),
    golden    = L.marker([42.659574, 21.160663]).bindPopup('This is Sheshi Zahir Pajaziti.');

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    });
    
    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});
    
        var map = L.map('map', {
            center: [42.667332, 21.164184],
            zoom: 10,
            layers: [osm, cities]
        });

        var baseMaps = {
            "OpenStreetMap": osm,
            "OpenStreetMap.HOT": osmHOT
        };
        
        var overlayMaps = {
            "Cities": cities
        };

        var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

        var baseMaps = {
            "OpenStreetMap": osm,
            "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
        };

        var crownHill = L.marker([42.662201628299336, 21.168809471278458]).bindPopup('This is Parku i Qytetit.'),
    rubyHill = L.marker([42.67543245693771, 21.211067145369682]).bindPopup('This is Parku i Germise.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");