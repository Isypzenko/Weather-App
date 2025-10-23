import { renderHook, waitFor } from "@testing-library/react";
import { useWeather } from "./useWeather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import * as api from "../api/weather";
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

describe("useWeather", () => {
  it("Should return corrected data", async () => {
    jest.spyOn(api, "geoCodingByCityName").mockResolvedValue({
      lat: 48.46,
      lon: 35.04,
    });
    jest.spyOn(api, "getForecast").mockResolvedValue({
      current: {
        wind_speed: 3.79,
        pressure: 1021,
        humidity: 43,
        uvi: 0.18,
        clouds: 80,
        visibility: 10000,
      },
      daily: [{ dt: 1760778000 }],
      hourly: [{ dt: 1760796000 }],
    });
    const { result } = renderHook(() => useWeather("Dnipro"), { wrapper });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.weatherDetails?.humidity).toBe(43);
    expect(result.current.daily?.length).toBe(1);
    expect(result.current.errorInput).toBe(false);
  });

  it("Should return Error when geoCodingByCityName fails", async () => {
    jest.spyOn(api, "geoCodingByCityName").mockImplementation(() => {
      throw new Error("GeoCoding error");
    });

    const { result } = renderHook(() => useWeather("sejrfvwjesnkfj12"), {
      wrapper,
    });
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.weather).toBeNull();
    expect(result.current.weatherDetails).toBeNull();
    expect(result.current.errorInput).toBe(true);
    expect(result.current.hourly).toBeNull();
    expect(result.current.daily).toBeNull();
  });
});
