import React, { useState, useEffect } from 'react';
import './mindReader.css'; 

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
    <div className="mind-reader-container">
      <div className="mind-reader-box">
        
        {/* The explosion covers the top section when finished */}
        {isFinished && (
          <div className="explosion-container">
            <img src="/explosion.gif" alt="explosion" className="explosion" />
          </div>
        )}

        {/* The main input area - hidden by the explosion */}
        <div className={`input-section ${isFinished ? 'hidden-by-explosion' : ''}`}>
          <h1>Pick any number you want, I will read your mind</h1>
          <input
            type="number"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            placeholder="Enter a number"
            disabled={isLoading}
          />
          <button onClick={handleReadMind} disabled={isLoading}>
            Read my Mind
          </button>
        </div>

        {/* Loading Bar and Status */}
        {(isLoading || isFinished) && (
          <div className="loading-section">
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="status-message">
              {isLoading ? statusMessage : ''}
            </p>
          </div>
        )}
        
        {/* Final Result */}
        {isFinished && (
          <h2 className="result-message">
            You were thinking of the NUMBER {finalNumber} 🤯😱
          </h2>
        )}
      </div>
    </div>
  );
}