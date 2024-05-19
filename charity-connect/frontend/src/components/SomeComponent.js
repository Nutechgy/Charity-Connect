// src/components/SomeComponent.js
import React from 'react';
import TextToSpeechButton from './TextToSpeechButton';

const SomeComponent = () => {
  const text = "This is the text you want to be read aloud.";

  return (
    <div>
      <p>{text}</p>
      <TextToSpeechButton text={text} />
    </div>
  );
};

export default SomeComponent;
