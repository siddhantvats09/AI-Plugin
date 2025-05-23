"use client"

import React, { useEffect, useRef } from "react";
import { Message } from "@/types/message";
import { MessageBubble } from "./MessageBubble";
import { PluginCard } from "./PluginCard";

export const ChatWindow = ({ messages }: { messages: Message[] }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-2 p-4 overflow-y-auto h-[55vh] bg-gray-50 rounded-lg">
      {messages.map((msg) =>
        msg.type === "plugin" && msg.pluginName && msg.pluginData ? (
          <PluginCard key={msg.id} title={msg.pluginName} content={JSON.stringify(msg.pluginData)} />
        ) : (
          <MessageBubble key={msg.id} message={msg} />
        )
      )}
      <div ref={bottomRef} />
    </div>
  );
};