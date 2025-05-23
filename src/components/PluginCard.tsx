import React from "react";

export const PluginCard = ({ title, content }: { title: string; content: string }) => (
  <div className="bg-white text-black shadow-md p-4 rounded-lg my-2 max-w-xl">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p>{content}</p>
  </div>
);
