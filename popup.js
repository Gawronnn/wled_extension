document.addEventListener("DOMContentLoaded", function () {
  const imageElement = document.getElementById("powerButton");
  const buttonElement = document.getElementById("openButton");
  const sliderElement = document.getElementById("brightnessSlider");

  imageElement.addEventListener("click", function () {
    fetch("http://ledy.local/win&T=2", { method: "GET" });
  });

  buttonElement.addEventListener("click", function () {
    chrome.tabs.create({ url: "http://ledy.local", active: true });
  });

  sliderElement.addEventListener("input", function () {
    const sliderValue = sliderElement.value;
    const fetchURL = `http://ledy.local/win&A=${sliderValue}`;
    const percent = (sliderValue / 255) * 100;
    document.getElementById("brightness").innerText = percent.toFixed(0) + "%";

    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
});

var request = new XMLHttpRequest();
var url = "http://ledy.local/win&=ac";

function fetchAndSetSliderValue() {
  request.onload = function () {
    if (request.status === 200) {
      var xmlResponse = request.responseText;

      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlResponse, "text/xml");

      var valueElement = xmlDoc.getElementsByTagName("ac")[0];
      var value = valueElement.textContent;

      var brightnessSlider = document.getElementById("brightnessSlider");
      brightnessSlider.value = value;
      var percent = (value / 255) * 100;
      document.getElementById("brightness").innerText =
        percent.toFixed(0) + "%";
    }
  };

  request.open("GET", url, true);
  request.send();
}
fetchAndSetSliderValue();

setInterval(fetchAndSetSliderValue, 2500);
