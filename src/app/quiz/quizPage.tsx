"use client";

import FlashcardComponent from "@components/ui/flashcard";
import { LargeCharacter, CharacterInfo } from "@components/ui/character";
import { useEffect, useState } from "react";
import { character } from "@lib/definitions";

function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

interface QuizPageProps {
  filteredCharacters: character[]; // Pass filtered characters directly
}

export default function QuizPage({ filteredCharacters }: QuizPageProps) {
  const [quizChar, setQuizChar] = useState<character | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showPrompt, setShowPrompt] = useState<boolean>(true);

  useEffect(() => {
    setQuizChar(getRandomItem(filteredCharacters));
    setMounted(true);
  }, [filteredCharacters]);

  if (!mounted || !quizChar) {
    return <div>Loading...</div>;
  }

  const loadNewCard = () => {
    setQuizChar(getRandomItem(filteredCharacters)); // Load a random character
    setShowPrompt(true); // Show the prompt again for the new card
  };

  return (
    <div>
      <FlashcardComponent
        prompt={<LargeCharacter char={quizChar.id} className="" />}
        answer={<CharacterInfo character={quizChar} className="" />}
        showPrompt={showPrompt}
        setShowPrompt={setShowPrompt}
      />
      <button
        onClick={loadNewCard}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
      >
        Load New Card
      </button>
    </div>
  );
}
