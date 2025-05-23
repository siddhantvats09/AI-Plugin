"use client"
import React, { useState } from "react";

export const ChatInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border p-2 rounded text-black"
        placeholder="Type a message or command..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};