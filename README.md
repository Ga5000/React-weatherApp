<h1>React Weather App</h1>

    <p>A simple React weather app that provides real-time weather information for a specified city. Users can search for a city and view details such as temperature, air quality index, sunrise/sunset times, humidity, pressure, visibility, and feels-like temperature.</p>

    <h2>Features</h2>

    <ul>
        <li><strong>Search Functionality:</strong> Users can search for a city to get up-to-date weather information.</li>
        <li><strong>Temperature:</strong> Displays the current temperature in Celsius.</li>
        <li><strong>Air Quality Index:</strong> Shows the air quality index of the selected city.</li>
        <li><strong>Sunrise/Sunset Times:</strong> Provides information on the sunrise and sunset times.</li>
        <li><strong>Humidity:</strong> Indicates the current humidity level in the selected city.</li>
        <li><strong>Pressure:</strong> Displays the atmospheric pressure at the location.</li>
        <li><strong>Visibility:</strong> Shows the visibility range in the selected city.</li>
        <li><strong>Feels-Like Temperature:</strong> Provides information on the perceived temperature.</li>
    </ul>

    <h2>Technologies Used</h2>

    <p>
        React: Frontend JavaScript library for building user interfaces.<br>
        <a href="https://openweathermap.org/">OpenWeatherMap API</a>: API used to fetch weather data.
    </p>

    <h2>Getting Started</h2>

    <ol>
        <li>Clone the repository:</li>
    </ol>

    <pre><code>git clone https://github.com/yourusername/react-weather-app.git
    cd react-weather-app
    </code></pre>

    <ol start="2">
        <li>Install dependencies:</li>
    </ol>

    <pre><code>npm install
    </code></pre>

    <ol start="3">
        <li>Obtain API Key:</li>
    </ol>

    <p>Sign up on <a href="https://openweathermap.org/">OpenWeatherMap</a> to get an API key. Replace <code>REACT_APP_API_KEY</code> in the <code>.env</code> file with your API key.</p>

    <ol start="4">
        <li>Start the app:</li>
    </ol>

    <pre><code>npm start
    </code></pre>

    <p>Open <a href="http://localhost:3000">http://localhost:3000</a> to view the app in your browser.</p>

    <h2>Environment Variables</h2>

    <p>Create a <code>.env</code> file in the root directory with the following content:</p>

    <pre><code>REACT_APP_API_KEY=your_openweathermap_api_key
    </code></pre>

    <p>Replace <code>your_openweathermap_api_key</code> with the API key obtained from OpenWeatherMap.</p>