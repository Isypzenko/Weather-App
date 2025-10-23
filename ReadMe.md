Weather App

A React-based weather forecasting application that displays current weather, hourly forecasts, and an 8-day forecast for a specified city. The app uses the OpenWeatherMap API to fetch weather data and is built with TypeScript, react-query for data fetching, and Jest for testing.

Search weather by city name.

Display current weather conditions, including temperature, feels-like temperature, humidity, wind speed, and more.

Show hourly forecast for the next 24 hours.

Provide an 8-day weather forecast.

Responsive design with a clean and modern UI.

Error handling for invalid city names or API failures.

Loading states to enhance user experience.
Tech Stack
Frontend: React, TypeScript
Data Fetching: react-query
API: OpenWeatherMap API
Styling: CSS modules
Testing: Jest, @testing-library/react
Version Control: Git
Installation

Clone the repository:

git clone https://github.com/your-username/weather-app.git
cd weather-app
Install dependencies: Ensure you have Node.js (version 16 or higher) installed. Then run:
npm install

Set up environment variables: Create a .env file in the root directory and add your OpenWeatherMap API key:
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
You can obtain an API key by signing up at OpenWeatherMap.

Start the development server:

npm start

The app will be available at http://localhost:3000.

Usage

Open the app in your browser.

Enter a city name (e.g., "Dnipro") in the search input and press Enter.

View the current weather, hourly forecast (next 24 hours), and 8-day forecast.

If an invalid city is entered, an error message will appear.

A loading spinner is displayed while fetching data.

Testing

The project includes unit tests written with Jest and @testing-library/react. Tests cover the useWeather hook and the App component, ensuring data fetching and UI rendering work as expected.

To run tests:

npm test

The tests mock API calls to OpenWeatherMap and verify:

Correct rendering of weather data (current, hourly, daily).

Proper handling of loading states and errors.

Correct display of weather icons from OpenWeatherMap.

Project Structure

weather-app/
├── src/
│   ├── api/
│   │   └── weather.ts          # API functions for fetching weather data
│   ├── components/
│   │   ├── DayForecast.tsx     # Component for current weather display
│   │   ├── HourlyForecast.tsx  # Component for hourly forecast
│   │   ├── EightDaysForecast.tsx # Component for 8-day forecast
│   │   ├── Header.tsx          # Search input and header component
│   │   └── UI/
│   │       ├── Loader.module.tsx # Loading spinner component
│   │       └── ErrorWindow.tsx # Error message component
│   ├── hooks/
│   │   └── useWeather.ts       # Custom hook for fetching weather data
│   ├── types/
│   │   └── weatherTypes.ts     # TypeScript types for weather data
│   ├── helpers/
│   │   └── letter-formatter.ts # Utility for formatting city names
│   ├── App.tsx                 # Main app component
│   ├── App.css                # Global styles
│   └── index.tsx              # Entry point
├── tests/
│   └── App.test.tsx           # Tests for App component and useWeather hook
├── .env                       # Environment variables (API key)
├── package.json               # Project dependencies and scripts
└── README.md                  # This file

Contributing

Contributions are welcome! To contribute:

Fork the repository.



Create a new branch (git checkout -b feature/your-feature).

Make your changes and commit (git commit -m "Add your feature").

Push to the branch (git push origin feature/your-feature).

Create a pull request to the dev branch.

Please ensure your code follows the project's coding standards and includes tests for new features.

License

This project is licensed under the MIT License. See the LICENSE file for details.
