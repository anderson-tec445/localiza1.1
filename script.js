const trackBtn = document.getElementById("trackBtn");
const statusText = document.getElementById("status");
const mapDiv = document.getElementById("map");

trackBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    statusText.textContent = "Obtendo localização...";
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    statusText.textContent = "Geolocalização não é suportada pelo seu navegador.";
  }
});

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  statusText.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

  // Inserir um mapa com a localização usando Google Maps ou OpenStreetMap
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  mapDiv.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen></iframe>`;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      statusText.textContent = "Usuário negou a solicitação de localização.";
      break;
    case error.POSITION_UNAVAILABLE:
      statusText.textContent = "Informações de localização indisponíveis.";
      break;
    case error.TIMEOUT:
      statusText.textContent = "A solicitação para obter localização expirou.";
      break;
    case error.UNKNOWN_ERROR:
      statusText.textContent = "Ocorreu um erro desconhecido.";
      break;
  }
}
