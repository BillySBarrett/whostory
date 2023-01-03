import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-2"
        >
            <h1 className="text-6xl font-bold text-lime-100">Play Who's Story</h1>
            <Link className="p-4 mt-10 text-2xl font-bold bg-gray-50 rounded-lg shadow-xl hover:bg-gray-300" href={"/newgame"}>New game</Link>
        </div>
    );
}