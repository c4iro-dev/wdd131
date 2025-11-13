const temperature = 25;
const windSpeed = 26;
const today = new Date();

function calculateWindChill(temperature, windSpeed) {
    wct = 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed**.16)) + (0.3965 * (temperature) * (windSpeed**.16));

    return wct.toFixed(1);
}

// Weather Data
document.getElementById("temp").innerHTML = `${temperature} °C`;
document.getElementById("wind").innerHTML = `${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("chill").innerHTML = `${calculateWindChill(temperature, windSpeed)} °C`;
}
else {
    document.getElementById("chill").innerHTML = "N/A";
}

// Footer data
document.getElementById("currentYear").innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = "Last modification: " + document.lastModified;