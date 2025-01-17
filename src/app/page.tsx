
export default function Home() {

  return (
      <main className="flex flex-col gap-8 items-center sm:items-start">
          <h1 className="text-lg">Welcome to Kanado By Dex</h1>
          <p>This is a hobbyist project for studying Japanese with a focus on the written language to drive proficiency</p>
          <p>You can browse the available character database by selecting the Characters menu above.  
            These characters are available in the quizzing portion of the application. </p>
          <p>I will be adding more characters to the application over time.</p>
          <p>Eventually the site will track your quiz metrics to help quiz you on new or challenging topics
            as well as creating more options for how to be quizzed 
            (kana to reading, reading to the kana, kana to the meaning, etc.) 
            as well as ways to limit the quizzing to units like just kanji or JLPT N5.</p>
      </main>
  );
}
