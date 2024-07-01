function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("movie-suggestion").innerText = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const location = `Latitude: ${lat}°, Longitude: ${lon}°`;

    document.getElementById("location").innerText = `Your Location: ${location}`;

  
    const movieSuggestion = suggestMovie(lat, lon);
    document.getElementById("movie-suggestion").innerText = `Suggested Movie: ${movieSuggestion}`;
}

function suggestMovie(lat, lon) {
    
    if (lat > 0) {
        return "La La Land";
    } else if (lat < 0) {
        return "Mad Max: Fury Road";
    } else {
        return "Inception";
    }
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("movie-suggestion").innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("movie-suggestion").innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("movie-suggestion").innerText = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("movie-suggestion").innerText = "An unknown error occurred.";
            break;
    }
}
