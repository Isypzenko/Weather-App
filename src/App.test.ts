import {
  render,
  screen,
  waitFor,
  fireEvent,
  renderHook,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as api from ".././src/api/weather";
import App from "./App";
import { useWeather } from "./hooks/useWeather";
import * as React from "react";

const wrapper = ({ children }: { children: React.ReactNode }) =>
  React.createElement(
    QueryClientProvider,
    {
      client: new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryDelay: 0,
          },
        },
      }),
    },
    children
  );

describe("It should test App component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("Test useWeather hook", async () => {
    jest.spyOn(api, "geoCodingByCityName").mockResolvedValue({
      lat: 48.46,
      lon: 35.04,
    });
    jest.spyOn(api, "getForecast").mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            current: {
              wind_speed: 3.79,
              pressure: 1021,
              humidity: 43,
              uvi: 0.18,
              clouds: 80,
              visibility: 10000,
              weather: [{ main: "Clouds", icon: "03d" }],
            },
            daily: [
              {
                dt: 1760778000,
                temp: { min: 10, max: 15 },
                weather: [{ main: "Clouds", icon: "03d" }],
              },
            ],
            hourly: [
              {
                dt: 1760796000,
                weather: [{ main: "Clouds", icon: "03d" }],
                temp: 15,
                wind_speed: 3.79,
                clouds: 70,
              },
            ],
          });
        }, 900);
      });
    });

    const { result } = renderHook(() => useWeather("Dnipro"), { wrapper });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.weatherDetails?.humidity).toBe(43);
    expect(result.current.daily?.length).toBe(1);
    expect(result.current.errorInput).toBe(false);

    render(React.createElement(App), { wrapper });
    fireEvent.change(screen.getByTestId("city-input"), {
      target: { value: "Dnipro" },
    });
    fireEvent.keyDown(screen.getByTestId("city-input"), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
    });
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
      expect(screen.queryByTestId("error")).not.toBeInTheDocument();
    });
  });
});
