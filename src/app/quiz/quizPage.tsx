"use client";

import characters from "../../../public/data/characterDatabase";
import FlashcardComponent from "@components/ui/flashcard";
import { LargeCharacter, CharacterInfo } from "@components/ui/character";
import { useEffect, useState } from "react";
import { character } from "@lib/definitions";

function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

interface QuizPageProps {
  filterFn?: (char: character) => boolean; // Optional filter function
}

export default function QuizPage({ filterFn }: QuizPageProps) {
  const [item, setItem] = useState<character | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const filteredCharacters = filterFn ? characters.filter(filterFn) : characters;
    setItem(getRandomItem(filteredCharacters));
    setMounted(true); // Set mounted to true after the component mounts
  }, [filterFn]);

  if (!mounted || !item) {
    return <div>Loading...</div>; // You can replace this with a skeleton loader
  }

  return (
    <FlashcardComponent
      prompt={<LargeCharacter char={item.id} className="" />}
      answer={<CharacterInfo character={item} className="" />}
    />
  );
}
