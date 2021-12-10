import React, { useState } from "react";
import logo from "./logo.svg";
import tauriCircles from "./tauri.svg";
import tauriWord from "./wordmark.svg";
import "./App.css";

const allModels = [
  {
    name: "哈哈",
  },
  {
    name: "呼呼",
  },
];

const sweets: string[] = [];
const App = () => {
  const [showSweets, setSweets] = useState<string[]>(sweets);
  // drag
  const onDragStart = (e: any) => {
    console.log("drag started", e);
    e.dataTransfer.setData("source", e.target.textContent);
  };

  const onDrop = async (e: any) => {
    console.log("drag drop", e);
    sweets.push(e.dataTransfer.getData("source"));
    setSweets([...sweets]);
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row">
      <div
        className="flex flex-row flex-wrap content-start overflow-auto"
        style={{ height: "calc(100vh - 64px)", flex: "0 0 160px" }}
      >
        {allModels.map((m) => {
          return (
            <div
              key={m.name}
              className="w-16 h-16 p-1 "
              draggable
              onDragStart={onDragStart}
            >
              <div className=" w-full h-full flex items-center justify-center rounded-xl  bg-yellow-500">
                {m.name}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="flex-auto bg-gray-400 flex flex-row flex-wrap justify-start items-start"
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {sweets.map((s, index) => (
          <div key={index} className="m-5 w-20 h-20 bg-red-500">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
