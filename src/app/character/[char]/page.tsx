import characters from "../../../../public/data/characterDatabase"
import { CharacterFullInfo } from "@components/ui/character"

export default async function Page({
  params,
}: {
  params: Promise<{ char: string }>
}) {
  const char = decodeURIComponent((await params).char)
  const character = characters.find(x => x.id === char);

  if (!character)
    return <div>Unable to find {char}</div>
  else
    return (<CharacterFullInfo character={character} />)
}

export async function generateStaticParams() {
  return characters.map((char) => ({
    char: char.id,
  }))
}
