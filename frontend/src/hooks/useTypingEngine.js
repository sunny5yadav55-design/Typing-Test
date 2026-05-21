import { useState, useRef, useEffect } from 'react';

// Helper: count WPM based on correct chars per minute
function calcWPM(correctChars, elapsedMs) {
  if (elapsedMs === 0) return 0;
  return Math.round((correctChars / 5) / (elapsedMs / 60000));
}
// Helper: accuracy
function calcAccuracy(correct, total) {
  if (total === 0) return 100;
  return Math.round((correct / total) * 100);
}

/**
 * Typing engine hook
 * @param {string} targetText
 * @param {function=} onComplete (optional) fires on finish
 * Usage:
 * const typing = useTypingEngine('some text', () => ...)
 */
export default function useTypingEngine(targetText, onComplete) {
  const [inputValue, setInputValue] = useState('');
  const [stateArr, setStateArr] = useState(() => Array(targetText.length).fill('pending')); // 'correct', 'incorrect', 'pending'
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timer, setTimer] = useState(0); // ms
  const timerRef = useRef(null);
  const startTime = useRef(null);

  // Per-character logic
  useEffect(() => {
    if (started && !finished) {
      timerRef.current = setInterval(() => {
        setTimer(Date.now() - startTime.current);
      }, 500);
      return () => clearInterval(timerRef.current);
    }
    return () => {};
  }, [started, finished]);

  // WPM/accuracy as you type
  useEffect(() => {
    let correct = 0, incorrect = 0;
    for (let i = 0; i < inputValue.length && i < targetText.length; i++) {
      if (inputValue[i] === targetText[i]) correct++;
      else incorrect++;
    }
    setWpm(calcWPM(correct, timer));
    setAccuracy(calcAccuracy(correct, correct + incorrect));
  }, [inputValue, timer, targetText]);

  // Detect complete
  useEffect(() => {
    if (!finished && inputValue.length === targetText.length) {
      setFinished(true);
      clearInterval(timerRef.current);
      setTimer(Date.now() - startTime.current);
      // Final update
      let correct = 0;
      for (let i = 0; i < targetText.length; i++) {
        if (inputValue[i] === targetText[i]) correct++;
      }
      setWpm(calcWPM(correct, Date.now() - startTime.current));
      setAccuracy(calcAccuracy(correct, targetText.length));
      onComplete && onComplete();
    }
  }, [inputValue, targetText, finished, onComplete]);

  // Handle input
  function handleInput(e) {
    const val = e.target.value;
    if (!started) {
      setStarted(true);
      startTime.current = Date.now();
      setTimer(0);
    }

    if (val.length > targetText.length) return; // no overtyping
    setInputValue(val);

    // Update char state array
    setStateArr(stateArr => {
      const nextArr = Array(targetText.length).fill('pending');
      for (let i = 0; i < val.length && i < targetText.length; i++) {
        if (val[i] === targetText[i]) nextArr[i] = 'correct';
        else nextArr[i] = 'incorrect';
      }
      // Caret
      if (val.length < targetText.length) nextArr[val.length] = 'caret';
      return nextArr;
    });
  }

  function restart() {
    setInputValue('');
    setStateArr(Array(targetText.length).fill('pending'));
    setStarted(false);
    setFinished(false);
    setWpm(0);
    setAccuracy(100);
    setTimer(0);
    clearInterval(timerRef.current);
  }

  return {
    inputValue,
    setInputValue: handleInput,
    stateArr,
    started,
    finished,
    wpm,
    accuracy,
    timer, // ms
    restart
  };
}
