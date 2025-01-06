import characters from "../../../public/data/characterDatabase";
import CharacterComponent from "@components/ui/character"

export default function Page() {
    return (
        <div className="flex flex-wrap gap-4">
            {characters.map(x => (
                <div key={x.id} className="flex flex-col basis-1/4 max-w-1/4 min-w-[300px] p-4 border rounded-lg">
                    <CharacterComponent character={x}  />
                </div>
            ))}
        </div>
    )
}
