import React from "react";
import { weatherPlugin } from "./plugins/weatherPlugin";
import { calcPlugin } from "./plugins/calcPlugin";
import { definePlugin } from "./plugins/definePlugin";

// Generic Plugin interface
export interface Plugin<T> {
  name: string;
  match: (input: string) => boolean;
  execute: (input: string) => Promise<T>;
  render: (data: T) => React.ReactElement;
}

// Use union type for plugin data
type PluginData = { result: string };

// Explicitly type plugin list
export const plugins: Plugin<PluginData>[] = [
  weatherPlugin,
  calcPlugin,
  definePlugin,
];

// Plugin manager
export const pluginManager = {
  match: (input: string) => plugins.find((p) => p.match(input)),
  run: async (input: string) => {
    const plugin = plugins.find((p) => p.match(input));
    if (!plugin) return null;

    const data = await plugin.execute(input);
    return {
      pluginName: plugin.name,
      pluginData: data,
      render: () => plugin.render(data),
    };
  },
};
