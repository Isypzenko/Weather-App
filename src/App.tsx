import "./App.css";
import Header from "./components/Header";
import DayForecast from "./components/DayForecast";
import HourlyForecast from "./components/HourlyForecast";
import EightDaysForecast from "./components/EightDaysForecast";
function App() {
  return (
    <>
      <Header></Header>
      <DayForecast></DayForecast>
      <HourlyForecast></HourlyForecast>
      <EightDaysForecast></EightDaysForecast>
    </>
  );
}

export default App;
