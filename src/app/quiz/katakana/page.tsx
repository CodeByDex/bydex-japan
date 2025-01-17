import QuizPage from "../quizPage";
import characters from "../../../../public/data/characterDatabase";
import { characterType } from "@lib/definitions";

export default function QuizKanji() {
  const filteredCharacters = characters.filter((char) => char.type === characterType.katakana);

  return <QuizPage filteredCharacters={filteredCharacters} />;
}
