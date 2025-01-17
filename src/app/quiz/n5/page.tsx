import QuizPage from "../quizPage";
import characters from "../../../../public/data/characterDatabase";

export default function QuizKanji() {
  const filteredCharacters = characters.filter((char) => char.JLPT >= 5);

  return <QuizPage filteredCharacters={filteredCharacters} />;
}
