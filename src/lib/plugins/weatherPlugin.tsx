"use client";

import React from "react";
import { Plugin } from "../pluginManager";

interface WeatherResult {
  result: string;
}

export const weatherPlugin: Plugin<WeatherResult> = {
  name: "weather",
  match: (input: string) => input.startsWith("/weather "),
  execute: async (input: string): Promise<WeatherResult> => {
    const city = input.replace("/weather ", "").trim();
    try {
      const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=3`);
      const text = await res.text();
      return { result: text };
    } catch {
      return { result: "Unable to fetch weather." };
    }
  },
  render: (data: WeatherResult) => {
    return <p>{data.result}</p>;
  },
};
