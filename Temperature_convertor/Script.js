function convertTemperature() 
{
    const temperature = parseFloat(document.getElementById("temp").value);
    const fromUnit = document.getElementById("from").value;
    const toUnit = document.getElementById("to").value;

    if (fromUnit === toUnit) 
    {
        document.getElementById("result").innerText = "Result: " + temperature + " " + toUnit;
        return;
    }

    let convertedTemperature;
    if (fromUnit === "celsius" && toUnit === "fahrenheit") 
    {
        convertedTemperature = (temperature * 9/5) + 32;
    }
    else if (fromUnit === "celsius" && toUnit === "Kelvin")
    {
        convertedTemperature = (temperature + 273.15)
    }
    else if (fromUnit === "celsius" && toUnit === "Reaumur")
    {
        convertedTemperature = (temperature + 4/5)
    }
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") 
    {
        convertedTemperature = (temperature - 32) * 5/9;
    }
    else if (fromUnit === "fahrenheit" && toUnit === "Kelvin") 
    {
        convertedTemperature = 5/9 * (temperature - 32) + 273.15;
    }
    else if (fromUnit === "fahrenheit" && toUnit === "Reaumur") 
    {
        convertedTemperature = 5/9 * (temperature - 32) * 4/5;
    }
    else if (fromUnit === "Kelvin" && toUnit === "celsius") 
    {
        convertedTemperature = (temperature - 273.15);
    }
    else if (fromUnit === "Kelvin" && toUnit === "fahrenheit") 
    {
        convertedTemperature = (9/5 * (temperature - 273.15)) + 32;
    }
    else if (fromUnit === "Kelvin" && toUnit === "Reaumur") 
    {
        convertedTemperature = (temperature - 273.15) * 4/5;
    }
    else if (fromUnit === "Reaumur" && toUnit === "celsius") 
    {
        convertedTemperature = (5/4 * temperature);
    }
    else if (fromUnit === "Reaumur" && toUnit === "fahrenheit") 
    {
        convertedTemperature = (9/4 * temperature) + 32;
    }
    else if (fromUnit === "Reaumur" && toUnit === "Kelvin") 
    {
        convertedTemperature = (temperature * 5/4) + 273.15;
    }
    
    document.getElementById("result").innerText = "Result: " + convertedTemperature.toFixed(2) + " " + toUnit;
}