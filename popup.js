document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("powerButton");
    const buttonElement = document.getElementById("openButton");
    const sliderElement = document.getElementById("brightnessSlider");

imageElement.addEventListener("click", function() {
    fetch('http://ledy.local/win&T=2', { method: 'GET' });
    console.log("Guzik został kliknięty!");
    });

buttonElement.addEventListener("click", function() {
    chrome.tabs.create({ url: "http://ledy.local", active: true });
    console.log("Guzik został kliknięty!");
    });

sliderElement.addEventListener("input", function() {
    const sliderValue = sliderElement.value;
    const fetchURL = `http://ledy.local/win&A=${sliderValue}`;

    fetch(fetchURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Process the fetched data
    })
    .catch(error => {
        console.error("Error:", error);
    });
    });
});