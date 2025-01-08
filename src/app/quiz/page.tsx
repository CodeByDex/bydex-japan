"use client"

import characters from "../../../public/data/characterDatabase";
import FlashcardComponent from "@components/ui/flashcard";
import { LargeCharacter, CharacterInfo } from "@components/ui/character";
import { useEffect, useState } from "react";
import { character } from "@lib/definitions";

function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  export default function Page() {
    const [item, setItem] = useState<character | null>(null);
    const [mounted, setMounted] = useState(false);
  
    // Set item only when the component mounts (client-side only)
    useEffect(() => {
      setItem(getRandomItem(characters));
      setMounted(true);  // Set mounted to true after the component mounts
    }, []);  // Empty dependency array ensures this runs only on mount
  
    // Return loading state or placeholder until the component is mounted
    if (!mounted || !item) {
      return <div>Loading...</div>; // You can replace this with a skeleton loader
    }

    return (
        <FlashcardComponent 
            prompt={<div>{<LargeCharacter char={item.id} className=""/>}</div>} answer={<CharacterInfo character={item} className="" /> } />
    )
}