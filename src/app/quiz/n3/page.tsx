import QuizPage from "../quizPage";
import characters from "../../../../public/data/characterDatabase";

export default function QuizKanji() {
  const filteredCharacters = characters.filter((char) => char.JLPT >= 3);

  return <QuizPage filteredCharacters={filteredCharacters} />;
}
