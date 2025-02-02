
"use client";
import jstVocab from "../../../../public/data/vocabularyDatabase";
import { reading } from "@lib/definitions";
import FlashcardComponent from "@components/ui/flashcard";
import { MeaningComponent, WordComponent } from '@components/ui/vocabulary';
import { useEffect, useState } from "react";

function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default function QuizPage() {
  const [quizChar, setQuizChar] = useState<reading | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showPrompt, setShowPrompt] = useState<boolean>((Math.random() < 0.5));

  useEffect(() => {
    setQuizChar(getRandomItem(jstVocab));
    setMounted(true);
  }, [jstVocab]);

  if (!mounted || !quizChar) {
    return <div>Loading...</div>;
  }

  const loadNewCard = () => {
    setQuizChar(getRandomItem(jstVocab)); // Load a random character
    setShowPrompt((Math.random() < 0.5)); // Show the prompt again for the new card
  };

  return (
    <div>
      <FlashcardComponent
        prompt={<WordComponent reading={quizChar} className="" />}
        answer={<MeaningComponent reading={quizChar}  />}
        showPrompt={showPrompt}
        setShowPrompt={setShowPrompt}
      />
      <button
        onClick={loadNewCard}
        className="button"
      >
        Load New Card
      </button>
    </div>
  );
}
