import characters from "../../../public/data/characterDatabase";
import FlashcardComponent from "@components/ui/flashcard";
import { ReadingComponent } from "@components/ui/character";

function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  export default function Page() {

    const item = getRandomItem(characters);

    return (
        <FlashcardComponent 
            prompt={<div>{item.id}</div>} answer={<ReadingComponent reading={item.readings[0]} /> } />
    )
}