import React from "react";
import MemoryGame from "./memorygame";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const GameSection = () => {
  return (
    <section
      id="game"
      className="py-20 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <span>
          <Link to="/">
            <ArrowLeftIcon />
          </Link>
        </span>
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let's Play!
        </h2>
        <div className="max-w-2xl mx-auto">
          <MemoryGame />
        </div>
      </div>
    </section>
  );
};

export default GameSection;
