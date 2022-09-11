let marker, map;

function initMap() {
  const posicion = {
    lat: -25.344,
    lng: 131.031,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  const marker = new google.maps.Marker({
    pasition: posicion,
    map,
    title: "Posicion Inicial",
  });
  marker.setPosition({ lat: -34.5453, lng: -58.4498 });
  marker.setPosition({ lat: -34.6699, lng: -58.5622 });
}
