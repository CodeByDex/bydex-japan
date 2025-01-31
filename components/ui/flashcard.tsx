"use client"

type FlashcardProps = {
  prompt: React.ReactNode;
  answer: React.ReactNode;
  showPrompt: boolean;
  setShowPrompt:  React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FlashcardComponent(
  {
    prompt, 
    answer, 
    showPrompt, 
    setShowPrompt}: FlashcardProps){

    const handleClick = () => {
      setShowPrompt(!showPrompt);
    };
  
    return (
      <div onClick={handleClick} className="card w-fit">
        <div>{showPrompt ? prompt : answer}</div>
      </div>
    );

}