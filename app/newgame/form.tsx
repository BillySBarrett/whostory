'use client'

import { FormEvent, useState } from "react";

export default function NewGameForm() {
    const [name, setName] = useState("");
    const [story, setStory] = useState("");
    
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const res = await fetch("http://127.0.0.1:8090/api/collections/stories/records", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, story }),
        });
        const data = await res.json();
        console.log(data); 
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-[80vh] py-2 gap-8">
        <div className="flex flex-col items-center text-white">
            <label htmlFor="name" className="text-2xl font-bold">Name</label>
            <input
            id="name"
            type="text"
            className="bg-zinc-800 shadow-xl p-4 m-2 w-80 focus:outline-none"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </div>
        <div className="flex flex-col items-center text-white">
            <label htmlFor="story"
            className="text-2xl font-bold">Enter your story</label>
            <textarea
            className="bg-zinc-800 shadow-xl p-4 m-2 h-52 w-80 focus:outline-none"
            id="story"
            value={story}
            onChange={(event) => setStory(event.target.value)}
            />
        </div>
        <button type="submit" className="bg-gray-300 shadow-md hover:bg-gray-100 px-4 py-2">Enter</button>
        </form>
    );
}
