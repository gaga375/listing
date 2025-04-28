
/* let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const address = address //"<%= data.location %>";
  const coords = await getCoordinates(address);

  if (!coords) {
    console.error("Could not geocode address:", address);
    return;
  }

  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: coords,
    mapId: "DEMO_MAP_ID",
  });

  new AdvancedMarkerElement({
    map: map,
    position: coords,
    title: title // "<%= data.title %>",
  });
}

async function getCoordinates(address) {
  const apiKey = apiKey //"<%= process.env.GOOGLE_API %>";
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






let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const address = "<%= data.location %>";
  const coords = await getCoordinates(address);

  if (!coords) {
    console.error("Could not geocode address:", address);
    return;
  }

  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: coords,
    mapId: "DEMO_MAP_ID",
  });

  new AdvancedMarkerElement({
    map: map,
    position: coords,
    title: "<%= data.title %>",
  });
}

async function getCoordinates(address) {
  const apiKey = "<%= process.env.GOOGLE_API %>";
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
*/
