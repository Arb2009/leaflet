// // Pizza
// var Crust = L.marker([42.65244897157923, 21.17176212807544]).bindPopup('Ketu eshte Pizza Crust <br> Vleresimet 4.5 - 5 yje <br> Ale S thot Restoranti i bukur ka shumë mundësi për pica, sanduiç, makarona dhe shumë ushqime të këndshme dhe të shijshme.'),
//     Napoli = L.marker([42.653479732786735, 21.16771501628135]).bindPopup('Ketu eshte Napoli Pizza <br> Vleresimet 4.5 - 5 yje <br>Anyle Zogu thot Një nga picabërësit më të mirë të Prishtinës. Kopshti i tyre është gjithashtu i bukur sidomos gjatë orës së artë.'),
//     Jana = L.marker([42.66308122788367, 21.16153853530947]).bindPopup('Ketu eshte Jana Napolitana <br> Vleresimet 4.8 - 5 yje <br>Diella Sejfijaj thot Ky lokal ofron një ambient të dekoruar me shumë shije dhe kujdes, duke krijuar një atmosferë të ngrohtë dhe familjare. Stafi është jashtëzakonisht mikpritës, duke e bërë eksperiencën akoma më të këndshme.'),
//     Ruds = L.marker([42.66050732833732, 21.161825886478464]).bindPopup('Ketu eshte Ruds Pizza <br> Vleresimet 4.6 - 5 yje <br> Kastriot Mucolli thot Pica e tyre është tepër e shijshme, me një kore krokante por të butë, salcë të pasur domatesh dhe sasinë e duhur të djathit.'),
//     Sos = L.marker([42.651026823391724, 21.168499103734533]).bindPopup('Ketu eshte Sos Pizza <br> Vleresimet 4.8 - 5 yje <br> Bleona Bullatovci thot Shkova këtu me të gjithë miqtë e mi për darkë dhe patëm picat më të mira absolutisht ndonjëherë!! E rekomandoj patjeter!! ❤️10/10.');

// var pizza = L.layerGroup([Crust, Napoli, Jana, Ruds, Sos]);

// // Hamburger
// var Aba = L.marker([42.6495931071088, 21.157716800469704]).bindPopup('Ketu eshte Hamburger Aba <br> Vleresimet 4.8 - 5 yje <br> Jona Bujari thot E thjeshte dhe e shijshme!!! Një nga hamburgerët më të mirë që kam pasur ndonjëherë. Të dy vendet janë shumë të pastra dhe stafi është shumë miqësor! Duhet ta provoni patjetër nëse jeni në Prishtinë!.'),
//     routeKalabria = L.marker([42.64530452935157, 21.155673527375953]).bindPopup('Ketu eshte Route 66 (Kalabria) <br> Vleresimet 5 - 5 yje <br> Labinot Lahu thot Ushqimi ishte absolutisht i shijshëm, plot shije dhe i prezantuar bukur. Pijet ishin bërë në mënyrë perfekte, freskuese dhe unike. Vetë vendi ka një atmosferë të mahnitshme - komod, elegant dhe mikpritës.'),
//     route66 = L.marker([42.64846796734142, 21.16848153027561]).bindPopup('Ketu eshte Route 66 <br> Vleresimet 4.2 -5 yje <br> Anisa Ismajli thot E duaaaaa nuk ka asnjë koment që mund të përshkruajë sa e mirë ishte kjo përvojë.'),
//     buffalo = L.marker([42.66121376069884, 21.16092697354637]).bindPopup('Ketu eshte Buffalo <br> Vleresimet 4.0 - 5 yje <br> Vlera S thot Burgerët më të mirë në qytet! I preferuari im është ai klasik amerikan! Gjithashtu serverët ishin super të bukur💕.'),
//     smash = L.marker([42.65757062695122, 21.151709027685673]).bindPopup('Ketu eshte Smash Burger <br> Vleresimet 4.8 - 5 yje <br> Drenik Sadiku thot Burger dhe patate të skuqura ishin mjaft të mira, të kalitura dhe të gatuara në perfeksion. Shërbimi ishte shumë, pasi është ende një vend i ri, supozoj se punonjësit po mësohen me menunë e tyre të vogël dhe me përbërësit dhe salcat.'),
//     shaban = L.marker([42.66328284322778, 21.163768238683343]).bindPopup('Ketu eshte Shaban Grill House <br> Vleresimet 4.5 - 5 yje <br> Genc Demjaha thot punëtorët janë vërtet të këndshëm dhe mishi ishte i mrekullueshëm. shërbimi ishte vërtet i shpejtë. një opsion vërtet i mirë për darkë.'),
//     hebs = L.marker([42.651026823391724, 21.174256387127027]).bindPopup('Ketu eshte Hebs <br> Vleresimet 4.0 - 5 yje <br> Besian Beci thot Nese doni me u ngi me ushqim shko n hebs e kom ni eksperienc shume tmire me hebsin, ushqimi ka kualitet shum t lart porosia delivery vjen shum shpejt edhe asniher ushqimi sosht i ftoft.');

// var hamburger = L.layerGroup([Aba, routeKalabria, route66, buffalo, smash, shaban, hebs]);

// // Italian
// var MammaMia = L.marker([42.65333057210587, 21.16757118455793]).bindPopup('Ketu eshte Napoli <br> Vleresimet 4.5 - 5 yje <br> Anyle Zogu thot Shërbim i shpejtë dhe efikas, ambient komod dhe i rehatshëm, ushqim i mirë dhe çmime shumë të arsyeshme. Do ta rekomandoja për çdo udhëtar në Kosovë.'),
//     sette = L.marker([42.6580731391406, 21.166656956444875]).bindPopup('Ketu eshte SETTE-Ristorante Italiano <br> Vleresimet 4.7 - 5 yje <br> Era Ahmeti thot Ushqim, ambient dhe shërbim i mrekullueshëm. Një nga restorantet më të mira italiane në Prishtinë.'),
//     ponte = L.marker([42.66434685415317, 21.15938891553721]).bindPopup('Ketu eshte Ponte Vecchio <br> Vleresimet 4.7 - 5 yje <br> Blerta Haxha thot Restoranti më komod familjar në qytet. Ushqimi është aq i shijshëm dhe jo shumë i shtrenjtë. Provoni lasagna, makarona ponte (e preferuara ime) dhe tiramisu.'),
//     la = L.marker([42.656035778513825, 21.175143053395796]).bindPopup('Ketu eshte La Napoletana <br> Vleresimet 4.7 - 5 yje <br> Kaltrina Zylfiu thot Home Pica bën pica vërtet të mira në stilin Napoletana! Korja është e lehtë dhe krokante, dhe mbushjet shijojnë super të freskët. Më pëlqeu veçanërisht vaji pikant - ai i shtoi picës vetëm goditjen e duhur.'),
//     trattoria = L.marker([42.64850207720944, 21.171007998102567]).bindPopup('Ketu eshte Restaurant Trattoria <br> Vleresimet 4.6 - 5 yje <br> Arben Mehani thot Kalova një kohë të mrekullueshme në Trattoria! Bifteku i viçit ishte absolutisht i shijshëm - i butë, i shijshëm dhe i gatuar në përsosmëri. Një atmosferë komode dhe staf miqësor.'),
//     vapiano = L.marker([42.658653731872185, 21.15500649763883]).bindPopup('Ketu eshte Vapiano <br> Vleresimet 4.5 - 5 yje <br> Nora Uka thot  Ushqimi ishte absolutisht i lezetshëm, me përbërës të freskët dhe shije të pasura që e bënin çdo pjatë një kënaqësi të kuzhinës. Nga makaronat e gatuara në mënyrë perfekte deri te sallatat e shijshme të freskëta.');

// var italian = L.layerGroup([MammaMia, sette, ponte, la, trattoria, vapiano]);

// // Greek
// var trock = L.marker([42.66184666155505, 21.154231161087417]).bindPopup('Ketu eshte Trock Taverna <br> Vleresimet 4.7 - 5 yje <br> Agon Gjonbalaj thot Absolutisht ushqimi më i mirë që kam shijuar ndonjëherë në një tavernë. Shije, shërbim dhe atmosferë fantastike. Shumë e rekomanduar!.'),
//     baba = L.marker([42.65936927110693, 21.159702867145086]).bindPopup('Ketu eshte Baba Ganoush Meze <br> Vleresimet 4.8 - 5  yje <br> Fisnik Namlixhiu thot Ushqimi është thjesht super i mirë. Gjithçka është e freskët, e shijshme dhe e bërë me kujdes të vërtetë. Por dip karrota e pjekur? Kjo është zhytja më e mirë që kam pasur ndonjëherë. Krem, pak i tymosur, pak i ëmbël, aq fjalë për fjalë perfekt.'),
//     gagi = L.marker([42.6635813816616, 21.162249957004892]).bindPopup('Ketu eshte Gagi Restaurant <br> Vleresimet 4.5 - 5 yje <br> Nita D thot Unë porosita pica Gagi, dhe ishte thjesht e mahnitshme! Si fillim, gjithashtu u kënaqa: shije të shijshme dhe produkte me freski të patëmetë. Stafi është mikpritës, i buzëqeshur dhe vërtet i vëmendshëm.');

// var greek = L.layerGroup([trock, baba, gagi]);

// // Tradicionale
// var albanezi = L.marker([42.66272685109351, 21.162894627352706]).bindPopup('Ketu eshte Alabnezi Restaurant <br> Vleresimet 4.9 - 5 yje <br> Lirian Ramadani thot Restorant i mrekullueshëm. Kishte biftek si dhe kërpudhat dhe të dyja ishin fantastike! Shërbimi ishte gjithashtu super miqësor dhe çmimi absolutisht i drejtë.'),
//     Tiffany = L.marker([42.66420925376755, 21.15779241254816]).bindPopup('Ketu eshte Tiffany <br> Vleresimet 4.3 - 5 yje <br> Ermal Hasimaj Ushqim tradicional i shijshëm. Shërbim i shkëlqyer. Një ndalesë e rregullt për mua sa herë që vij në Prishtina.'),
//     shpija = L.marker([42.66189675700115, 21.16365067323063]).bindPopup('Ketu eshte Shpija e Vjeter <br> Vleresimet 4.2 - 5 yje <br> Valdet S thot Një vend perfekt për të ngrënë dhe për të shijuar shoqëri të mirë. Provoni biftekun e mbushur. Ishte i shijshëm dhe porcioni ishte i duhuri.');

// var traditional = L.layerGroup([albanezi, Tiffany, shpija]);


// // meksikane
// var mexicana = L.marker([42.661204234436234, 21.160461695577766]).bindPopup('Ketu eshte Mexicana <br> Vleresimet 4.1 - 5 yje <br> Rron Halili thot Ushqim autentik meksikan. I shijshëm, porcion i shkëlqyer dhe çmim i mirë. Më pëlqen të ha këtu.'),
//     comandante = L.marker([42.65842667177384, 21.14750149111432]).bindPopup('Ketu eshte Comandante Marcos <br> Vleresimet 4.4 - 5 yje <br> Florian Gashi Comandante Marcos ofron kuzhinë të jashtëzakonshme meksikane me shije të pasura, autentike dhe një atmosferë të gjallë.'),
//     mucho = L.marker([42.661950873905205, 21.160258050636724]).bindPopup('Ketu eshte Eat Mucho <br> Vleresimet 4.2 - 5 yje <br> Durim Bujupi Ushqimi më i mirë meksikan në Prishtinë.Gjithmonë shërbim i mirë dhe ushqim i mirë me kombinime unike.');

// var mexican = L.layerGroup([mexicana, comandante, mucho]);

// // Steakhouse
// var lisa = L.marker([42.664316500225105, 21.159984141189742]).bindPopup('Ketu eshte Lisas Restaurant <br> Vleresimet 4.7 - 5 yje <br> Hasan Kllokoqi thot Lokacion shume i mire, ne qender te Prishtines. Shërbim shumë miqësor dhe i dobishëm që më bën shumë të lehtë zgjedhjen e vaktit. Ushqimi është i freskët dhe shumë i shijshëm.'),
//     master = L.marker([42.671125609524076, 21.194274462437463]).bindPopup('Ketu eshte Master Steakhouse <br> Vleresimet 4.6 - 5 yje <br> Besart Recani thot Sinqerisht, gjithçka rreth Masterit ishte në vend. Atmosfera ishte e stilit të lartë, por e ftohtë, ushqimi ishte i jashtëzakonshëm - një nga biftekët më të mirë që kam pasur ndonjëherë.'),
//     sarajeva = L.marker([42.66226208644534, 21.16218743268379]).bindPopup('Ketu eshte Sarajeva SteakHouse <br> Vleresimet 4.5 - 5 yje <br> Liridona G thot Vend shumë i bukur dhe elegant, staf i shkëlqyer dhe miqësor, si dhe ushqim fantastik!.');
//     freskia = L.marker([42.67221570018321, 21.219102968653218]).bindPopup('Ketu eshte Restaurant Freskia <br> Vleresimet 4.4 - 5 yje <br> Redon Ymeri thot vend i mrekullueshëm për të ardhur me familjen ia vlen dhe një natyrë dhe kafe vërtet e mrekullueshme është e mahnitshme.');
//     ramazzoti = L.marker([42.65035231967197, 21.158815662074307]).bindPopup('Ketu eshte Ramazzoti <br> Vleresimet 4.8 - 5 yje <br> Egzon Potoku thot E adhuroj këtë restorant! Çmimet janë perfekte, ushqimi është i shijshëm dhe stafi është jashtëzakonisht miqësor.');
//     vgermia = L.marker([42.669488244401435, 21.218743552276937]).bindPopup('Ketu eshte Vila Germia <br> Vleresimet 4.4 - 5 yje <br> Besnik Avdija thot Një nga restorantet më të mirë të vendosur në Prishtinë. Është 5 minuta me makinë nga qendra e qytetit ose 15 minuta me autobusin nr. 4. Me një pozicion të shkëlqyeshëm në fund të luginës së vogël të parkut të Gërmisë.');
// var steakhouse = L.layerGroup([lisa, master, sarajeva, freskia, ramazzoti, vgermia]);

// // Map layers
// var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

// var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
// });

// var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
// });

// var map = L.map('map', {
//     center: [42.655140842634545, 21.16398715139936],
//     zoom: 14,
//     layers: [osm, pizza]
// });

// var baseMaps = {
//     "OpenStreetMap": osm,
//     "OpenStreetMap.HOT": osmHOT,
//     "OpenTopoMap": openTopoMap
// };

// var overlayMaps = {
//     "🍕Pizza": pizza,
//     "🍔Hamburger": hamburger,
//     "🍝Italian": italian,
//     "🥙Greek": greek,
//     "🍽️Tradicionale": traditional,
//     "🌮Meksikane": mexican,
//     "🥩Steakhouse": steakhouse
// };

 

