import React, { useState, useEffect } from "react";
import { Gamepad2, RotateCcw } from "lucide-react";

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  // Tech-themed emojis for the memory game
  const emojis = ["⚛️", "🎮", "💻", "🚀", "⚡", "🔥", "🎯", "💡", "🍩", "🎉"];

  useEffect(() => {
    if (gameStarted) {
      initializeCards();
    }
  }, [gameStarted]);

  const initializeCards = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        content: emoji,
        isFlipped: false,
      }));
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setMoves(0);
    setGameCompleted(false);
  };

  const handleCardClick = (id) => {
    if (disabled || flipped.includes(id) || solved.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);
    setMoves(moves + 1);

    if (newFlipped.length === 2) {
      setDisabled(true);
      const [first, second] = newFlipped;

      if (cards[first].content === cards[second].content) {
        const newSolved = [...solved, first, second];
        setSolved(newSolved);
        setFlipped([]);
        setDisabled(false);

        // Check if game is completed
        if (newSolved.length === cards.length) {
          setGameCompleted(true);
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
        <Gamepad2 size={48} className="text-blue-500" />
        <h3 className="text-2xl font-bold text-gray-800">
          Memory Game Challenge
        </h3>
        <p className="text-gray-600 text-center max-w-md">
          Test your memory by matching pairs of tech-themed cards. Find all
          matches in the fewest moves possible!
        </p>
        <button
          onClick={() => setGameStarted(true)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Start Game
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex justify-between items-center w-full max-w-md mb-4">
        <span className="text-gray-600">Moves: {moves}</span>
        <button
          onClick={initializeCards}
          className="flex items-center gap-2 px-4 py-2 text-blue-500 hover:text-blue-600 transition-colors"
        >
          <RotateCcw size={18} /> Reset
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 w-full max-w-md">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={disabled}
            className={`
              h-20 rounded-lg text-3xl flex items-center justify-center
              transition-all duration-300 transform hover:scale-105
              ${
                flipped.includes(card.id) || solved.includes(card.id)
                  ? "bg-blue-500 text-white rotate-y-180"
                  : "bg-white shadow-md"
              }
              ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {(flipped.includes(card.id) || solved.includes(card.id)) &&
              card.content}
          </button>
        ))}
      </div>

      {gameCompleted && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            🎉 Congratulations!
          </h3>
          <p className="text-gray-600">
            You completed the game in {moves} moves!
          </p>
          <button
            onClick={initializeCards}
            className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
