import './App.css';
import { useState } from "react";

export default function App() {
  const [words, setWords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addWord = () => {
    if (inputValue.trim() !== "") {
      setWords([...words, ...inputValue.trim().split("")]);
      setInputValue("");
    }
  };

  const shuffleWords = () => {
    setWords((prevWords) => {
      const shuffled = [...prevWords];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  return (
    <div className="App">
      <div className="p-4 max-w-md mx-auto">
        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 rounded w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addWord}>
            Add
          </button>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {words.map((char, index) => (
            <div key={index} className="p-2 bg-gray-200 text-center rounded shadow">
              {char}
            </div>
          ))}
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={shuffleWords}>
          Shuffle
        </button>
      </div>
    </div>
  );
}
