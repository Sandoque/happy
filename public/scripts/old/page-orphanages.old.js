//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg" ></a>'
);

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWhelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map('mapid', options).setView([-8.0570869, -34.9252356], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon dfefd
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([-8.0570869, -34.9252356], { icon }).addTo(map).bindPopup(popup);
