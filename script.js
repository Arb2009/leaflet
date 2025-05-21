var Crust  = L.marker([42.65244897157923, 21.17176212807544]).bindPopup('Ketu eshte Pizza Crust <br> Vleresimet 4.5 - 5 yje <br> Ale S thot Restoranti i bukur ka shumë mundësi për pica, sanduiç, makarona dhe shumë ushqime të këndshme dhe të shijshme.'),
    Napoli = L.marker([42.653479732786735, 21.16771501628135]).bindPopup('Ketu eshte Napoli Pizza <br> Vleresimet 4.5 - 5 yje <br>Anyle Zogu thot Një nga picabërësit më të mirë të Prishtinës. Kopshti i tyre është gjithashtu i bukur sidomos gjatë orës së artë.'),
    Jana   = L.marker([42.66308122788367, 21.16153853530947]).bindPopup('Ketu eshte Jana Napolitana <br> Vleresimet 4.8 - 5 yje <br>Diella Sejfijaj thot Ky lokal ofron një ambient të dekoruar me shumë shije dhe kujdes, duke krijuar një atmosferë të ngrohtë dhe familjare. Stafi është jashtëzakonisht mikpritës, duke e bërë eksperiencën akoma më të këndshme .'),
    Ruds   = L.marker([42.66050732833732, 21.161825886478464]).bindPopup('Ketu eshte Ruds Pizza <br> Vleresimet 4.6 - 5 yje <br> Kastriot Mucolli thot Pica e tyre është tepër e shijshme, me një kore krokante por të butë, salcë të pasur domatesh dhe sasinë e duhur të djathit..'),
    Sos    = L.marker([42.651026823391724, 21.168499103734533]).bindPopup('Ketu eshte Sos Pizza.');

var pizza = L.layerGroup([Crust, Napoli, Jana, Ruds, Sos]);

// hamburger
var Aba = L.marker([42.6495931071088, 21.157716800469704]).bindPopup('Ketu eshte Hamburger Aba.'),
    routeKalabria = L.marker([42.64530452935157, 21.155673527375953]).bindPopup('Ketu eshte Route 66 (Kalabria).');
    route66 = L.marker([42.64846796734142, 21.16848153027561]).bindPopup('Ketu eshte Route 66.');
 buffalo = L.marker([42.66121376069884, 21.16092697354637]).bindPopup('Ketu eshte Buffalo.');
smash = L.marker([42.65757062695122, 21.151709027685673]).bindPopup('Ketu eshte Smash Burger.');
shaban = L.marker([42.66328284322778, 21.163768238683343]).bindPopup('Ketu eshte Shaban Grill House.');
hebs = L.marker([42.6501059219779, 21.174256387127027]).bindPopup('Ketu eshte Hebs.');

var hamburger = L.layerGroup([Aba, routeKalabria, route66, buffalo , smash, shaban, hebs]);

// Italian restaurants
var MammaMia = L.marker([42.65333057210587, 21.16757118455793]).bindPopup('Ketu eshte Napoli.'),
    BellaItalia = L.marker([42.6580731391406, 21.166656956444875]).bindPopup('Ketu eshte Tabana Restaurant.');
sette = L.marker([42.6580731391406, 21.166656956444875]).bindPopup('Ketu eshte SETTE-Ristorante Italiano.');
ponte = L.marker([42.66434685415317, 21.15938891553721]).bindPopup('Ketu eshte Ponte Vecchio.');
la = L.marker([42.656035778513825, 21.175143053395796]).bindPopup('Ketu eshte La Napoletana.');
trattoria = L.marker([42.64850207720944, 21.171007998102567]).bindPopup('Ketu eshte Restaurant Trattoria.');
vapiano = L.marker([42.658653731872185, 21.15500649763883]).bindPopup('Ketu eshte Vapiano.');

var italian = L.layerGroup([MammaMia, BellaItalia, sette, ponte, la, trattoria, vapiano]);

// Greek restaurants
var trock = L.marker([42.66184666155505, 21.154231161087417]).bindPopup('Ketu eshte Trock Taverna.'),
    baba = L.marker([42.65936927110693, 21.159702867145086]).bindPopup('Ketu eshte Baba Ganoush Meze.');
gagi = L.marker([42.6635813816616, 21.162249957004892]).bindPopup('Ketu eshte Gagi Restaurant <br> Rating.');

var greek = L.layerGroup([trock, baba, gagi]);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
});

var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

var map = L.map('map', {
    center: [42.655140842634545, 21.16398715139936],
    zoom: 14,
    layers: [osm, pizza]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT,
    "OpenTopoMap": openTopoMap
};

var overlayMaps = {
    "Pizza": pizza,
    "Hamburger": hamburger,
    "Italian": italian,
    "Greek": greek
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
