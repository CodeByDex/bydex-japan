import QuizPage from "../quizPage";
import characters from "../../../../public/data/characterDatabase";

export default function QuizKanji() {
  const filteredCharacters = characters.filter((char) => char.AP === true);

  return <QuizPage filteredCharacters={filteredCharacters} />;
}
