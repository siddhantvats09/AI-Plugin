"use client";

import React from "react";
import { Plugin } from "../pluginManager";

interface CalcResult {
  result: string;
}

export const calcPlugin: Plugin<CalcResult> = {
  name: "calc",
  match: (input: string) => input.startsWith("/calc "),
  execute: async (input: string): Promise<CalcResult> => {
    const expr = input.replace("/calc ", "").trim();
    try {
    
      const result = Function(`"use strict"; return (${expr})`)();
      return { result: String(result) };
    } catch {
      return { result: "Invalid expression" };
    }
  },
  render: (data: CalcResult) => {
    return <p>{data.result}</p>;
  },
};
