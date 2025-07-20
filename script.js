function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "c14f58c1317191868037eb27137f51fc"; // Your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const result = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
