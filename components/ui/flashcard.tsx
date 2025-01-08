"use client"

import React, { useState } from 'react';

type FlashcardProps = {
  prompt: React.ReactNode;
  answer: React.ReactNode;
};

export default function FlashcardComponent({prompt, answer}: FlashcardProps){
    const [showPrompt, setShowPrompt] = useState(true);

    const handleClick = () => {
      setShowPrompt(false);
    };
  
    return (
      <div onClick={handleClick}>
        <div>{showPrompt ? prompt : answer}</div>
      </div>
    );

}