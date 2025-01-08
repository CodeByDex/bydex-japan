import characters from "../../../public/data/characterDatabase";
import FlashcardComponent from "@components/ui/flashcard";
import { LargeCharacter, CharacterInfo } from "@components/ui/character";

function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  export default function Page() {

    const item = getRandomItem(characters);

    return (
        <FlashcardComponent 
            prompt={<div>{<LargeCharacter char={item.id} className=""/>}</div>} answer={<CharacterInfo character={item} className="" /> } />
    )
}