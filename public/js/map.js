
let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement} = await google.maps.importLibrary("marker");

  const address = address1;
  const coords = await getCoordinates(address);
  if (!coords) {
    console.error("Could not geocode address:", address);
    return;
  }

  map = new Map(document.getElementById("map"), {
    zoom: 11,
    center: coords,
    mapId: "DEMO_MAP_ID",
  });

  new AdvancedMarkerElement({
    map: map,
    position: coords,
    title:`Pleese book resor after provide current location`,
  });

}

async function getCoordinates(address) {
  const apiKey = apiKey1;
  const encodedAddress = encodeURIComponent(address);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK") {
      return data.results[0].geometry.location;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Geocode fetch error:", err);
    return null;
  }
} 



