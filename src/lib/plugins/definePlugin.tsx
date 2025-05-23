"use client";

import React from "react";
import { Plugin } from "../pluginManager";

interface DefineResult {
  result: string;
}

export const definePlugin: Plugin<DefineResult> = {
  name: "define",
  match: (input: string) => input.startsWith("/define "),
  execute: async (input: string): Promise<DefineResult> => {
    const word = input.replace("/define ", "").trim();
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const json = await res.json();
      const definition = json[0]?.meanings?.[0]?.definitions?.[0]?.definition || "No definition found.";
      return { result: definition };
    } catch (e) {
      return { result: "Error fetching definition." };
      console.log(e)
    }
  },
  render: (data: DefineResult) => {
    return <p>{data.result}</p>;
  },
};
