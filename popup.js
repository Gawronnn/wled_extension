document.addEventListener("DOMContentLoaded", function() {
    const buttonElement = document.getElementById("myButton");

document.getElementById("myButton").addEventListener("click", function() {
    fetch('http://ledy.local/win&T=2', { method: 'GET' });
    console.log("Guzik został kliknięty!");
});
});