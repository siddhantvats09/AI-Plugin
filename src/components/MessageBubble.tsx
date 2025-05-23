import React from "react";
import { Message } from "@/types/message";

export const MessageBubble = ({ message }: { message: Message }) => (
  <div className={`my-2 p-3 rounded-lg max-w-xl ${message.sender === 'user' ? 'bg-blue-700 self-end' : 'bg-gray-700 self-start'}`}>
    <div>{message.content}</div>
  </div>
);
