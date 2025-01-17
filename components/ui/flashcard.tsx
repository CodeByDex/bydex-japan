"use client"

import React, { useState } from 'react';

type FlashcardProps = {
  prompt: React.ReactNode;
  answer: React.ReactNode;
  showPrompt: boolean;
  setShowPrompt:  React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FlashcardComponent(
  {
    prompt, 
    answer, 
    showPrompt, 
    setShowPrompt}: FlashcardProps){

    const handleClick = () => {
      setShowPrompt(false);
    };
  
    return (
      <div onClick={handleClick}>
        <div>{showPrompt ? prompt : answer}</div>
      </div>
    );

}