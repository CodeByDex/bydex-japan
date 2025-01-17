import QuizPage from "./quizPage";
import characters from "../../../public/data/characterDatabase"

export default function QuizKanji() {
  return <QuizPage filteredCharacters={characters} />;
}
