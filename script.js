function convertTemperature() {
    // Get user input
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;

    // Perform temperature conversion
    var convertedTemperature;
    var convertedUnit;

    if (unit === "celsius") {
      convertedTemperature = (temperature * 9/5) + 32;
      convertedUnit = "Fahrenheit";
    } else if (unit === "fahrenheit") {
      convertedTemperature = (temperature - 32) * 5/9;
      convertedUnit = "Celsius";
    } else if (unit === "kelvin") {
      convertedTemperature = temperature - 273.15;
      convertedUnit = "Celsius";
    }

    // Display the converted temperature
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + convertedUnit;
  }