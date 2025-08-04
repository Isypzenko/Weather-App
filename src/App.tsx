import "./App.css";
import Header from "./components/Header";
import DayForecast from "./components/DayForecast";
import HourlyForecast from "./components/HourlyForecast";
function App() {
  return (
    <>
      <Header></Header>
      <DayForecast></DayForecast>
      <HourlyForecast></HourlyForecast>
    </>
  );
}

export default App;
