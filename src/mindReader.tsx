import React, { useState, useEffect } from 'react';
import explosionGif from './explosion.gif';

const loadingMessages = [
  "READING YOUR MIND....",
  "ANALYZING BRAIN PATTERN.....",
  "CONNECTING TO YOUR BRAIN VIA BLUETOOTH.....",
  "CALCULATING 6.37E+893127845151387513 POSSIBLE COMBINATIONS......",
  "ACCESSING MEMORY CORTEX....",
  "DECRYPTING THOUGHTS....",
  "FINALIZING RESULT..."
];

export default function MindReader() {
  const [numberInput, setNumberInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [finalNumber, setFinalNumber] = useState<string>('');

  // Effect to handle the loading animation
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isLoading) {
      // Reset states for a new run
      setIsFinished(false);
      setProgress(0);
      setStatusMessage(loadingMessages[0]);

      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            setIsFinished(true);
            setFinalNumber(numberInput);
            return 100;
          }

          // Update status message based on progress
          const messageIndex = Math.floor(newProgress / (100 / loadingMessages.length));
          setStatusMessage(loadingMessages[messageIndex] || loadingMessages[loadingMessages.length - 1]);

          return newProgress;
        });
      }, 500); // Update every half second
    }

    // Cleanup function to clear interval if component unmounts
    return () => clearInterval(interval);
  }, [isLoading, numberInput]);

  const handleReadMind = () => {
    if (!numberInput.trim() || isNaN(Number(numberInput))) {
      alert("Please enter a valid number!");
      return;
    }
    setIsLoading(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-neo-bg border-3 border-neo-text p-8 md:p-12 shadow-hard-xl relative overflow-hidden brutal-card">

        {/* The explosion covers the top section when finished */}
        {isFinished && (
          <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
            <img src={explosionGif} alt="explosion" className="max-w-full max-h-full scale-150 -translate-y-24 mix-blend-multiply dark:mix-blend-screen" />
          </div>
        )}

        {/* The main input area - hidden by the explosion */}
        <div className={`transition-opacity duration-300 ${isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <h1 className="font-display font-black text-4xl md:text-6xl mb-8 text-center leading-none">
            PICK A NUMBER<br />
            <span className="text-stroke text-transparent hover:text-neo-pink transition-colors duration-300">ANY NUMBER</span>
          </h1>

          <div className="space-y-6">
            <input
              type="number"
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value)}
              placeholder="ENTER NUMBER"
              disabled={isLoading}
              className="w-full bg-neo-bg border-3 border-neo-text p-4 font-bold text-2xl text-center focus:outline-none focus:shadow-hard transition-shadow focus:bg-neo-yellow placeholder:text-gray-400"
            />
            <button
              onClick={handleReadMind}
              disabled={isLoading}
              className="w-full bg-neo-black text-white border-3 border-neo-text py-4 font-black text-2xl shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none-active transition-all uppercase disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neo-blue hover:text-black"
            >
              {isLoading ? 'READING...' : 'READ MY MIND'}
            </button>
          </div>
        </div>

        {/* Loading Bar and Status */}
        {(isLoading || isFinished) && (
          <div className="mt-8 relative z-10">
            <div className="w-full bg-neo-bg border-3 border-neo-text h-8 mb-4 overflow-hidden">
              <div
                className="h-full bg-neo-green border-r-3 border-neo-text transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="font-mono font-bold text-sm md:text-base text-center animate-pulse">
              {isLoading ? statusMessage : ''}
            </p>
          </div>
        )}

        {/* Final Result */}
        {isFinished && (
          <div className="mt-8 text-center relative z-30 animate-float">
            <h2 className="font-display font-black text-3xl md:text-5xl bg-neo-yellow border-3 border-neo-text p-4 shadow-hard inline-block transform -rotate-2">
              You were thinking of the NUMBER {finalNumber} 🤯😱
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}