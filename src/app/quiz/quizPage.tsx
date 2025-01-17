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
  const [item, setItem] = useState<character | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setItem(getRandomItem(filteredCharacters));
    setMounted(true);
  }, [filteredCharacters]);

  if (!mounted || !item) {
    return <div>Loading...</div>;
  }

  return (
    <FlashcardComponent
      prompt={<LargeCharacter char={item.id} className="" />}
      answer={<CharacterInfo character={item} className="" />}
    />
  );
}
