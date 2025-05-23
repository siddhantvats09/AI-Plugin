export type Message = {
  id: string;
  sender: "user" | "assistant";
  content: string;
  type: "text" | "plugin";
  pluginName?: string;
  pluginData?: any;
  timestamp: string;
};
