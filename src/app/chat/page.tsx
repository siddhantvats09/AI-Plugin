'use client';
import { useEffect, useState } from "react";
import { ChatInput } from "@/components/ChatInput";
import { ChatWindow } from "@/components/ChatWindow";
import { Message } from "@/types/message";
import { pluginManager } from "@/lib/pluginManager";
import { v4 as uuidv4 } from "uuid";

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("chat-messages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("chat-messages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (text: string) => {
    const userMsg: Message = {
      id: uuidv4(),
      sender: "user",
      content: text,
      type: "text",
      timestamp: new Date().toISOString(),
    };

    setMessages((msgs) => [...msgs, userMsg]);

    const pluginResult = await pluginManager.run(text);
    if (pluginResult) {
      const pluginMsg: Message = {
        id: uuidv4(),
        sender: "assistant",
        content: "", 
        type: "plugin",
        pluginName: pluginResult.pluginName,
        pluginData: pluginResult.pluginData,
        timestamp: new Date().toISOString(),
      };
      setMessages((msgs) => [...msgs, pluginMsg]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatPage;