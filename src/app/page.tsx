"use client";

import { useState } from "react";

export default function Home() {

  const [number, setNumber] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    setNumber(number + 1);
    e.preventDefault();
  }

  const handleClick = () => {
    console.log(number)
    setNumber(number - 1);
  }

  return (
    <div className="h-full flex flex-col gap-5 justify-center items-center">
      <div className="font-mono text-slate-500 text-xl">
        {number}
      </div>

      <div className="flex flex-row gap-4 text-slate-800">
        <form onSubmit={handleSubmit} >
          <button type="submit" className="hover:underline">
            Add
          </button>

        </form>

        <button onClick={handleClick} className="hover:underline">
          Subtract
        </button>
      </div>
    </div>
  );
}
