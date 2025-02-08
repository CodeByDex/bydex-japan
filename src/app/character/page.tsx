import characters from "../../../public/data/characterDatabase";
import { CharacterFullInfo } from "@components/ui/character"

export default function Page() {
    return (
        <div className="flex flex-wrap gap-4">
            {characters.map(x => (
                <div key={x.id} className="flex flex-col basis-1/4 max-w-1/4 min-w-[300px] card">
                    <CharacterFullInfo character={x} />
                </div>
            ))}
        </div>
    )
}
