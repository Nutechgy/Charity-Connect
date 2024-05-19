import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeechButton = ({ text }) => {
  const { speak } = useSpeechSynthesis();

  const handleClick = () => {
    speak({ text });
  };

  return (
    <button onClick={handleClick}>Read Aloud</button>
  );
};

export default TextToSpeechButton;
