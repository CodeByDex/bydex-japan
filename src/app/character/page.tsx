import characters from "../../../public/data/characterDatabase";
import CharacterComponent from "@components/ui/character"

export default function Page() {
    return (
        <div className="flex flex-wrap gap-4">
            <p>Under Construction - List of Characters</p>
            {characters.map(x => (
                <div key={x.id} className="flex-a basis-1/3 max-w-1/3 p-4 border rounded-lg">
                    <CharacterComponent character={x}  />
                </div>
            ))}
        </div>
    )
}
