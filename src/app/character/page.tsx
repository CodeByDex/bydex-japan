import characters from "../../../public/data/characterDatabase";
// import { character } from "@components/ui/character"

export default function Page() {
    return (
        <div>
            <p>Under Construction - List of Characters</p>;
            {characters.map(x => (
                <li key={x.id}>{x.id}</li>
            ))}
        </div>
    )
}