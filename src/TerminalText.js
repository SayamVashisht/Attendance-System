import React, { useState, useEffect } from 'react';

function TerminalText({ texts, interval = 100, loop = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    if (loop || currentIndex < texts.length - 1) {
      timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, interval);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, interval, loop, texts]);

  return (
    <span className="terminal-text">
      <span className="cursor">_</span>
      {texts[currentIndex]}
    </span>
  );
}

export default TerminalText;
