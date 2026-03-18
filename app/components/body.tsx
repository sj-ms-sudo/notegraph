"use client";
import { useSearchParams } from "next/navigation";
import { notes } from "@/public/note";

export default function Body(){
    const searchParams = useSearchParams()
    const searchKey = searchParams.get("key")
    const note = notes.find((note)=>note.slug === searchKey)
    if (!note){
        return <p>Note not found</p>
    }
    return (
        <div className="h-full w-full text-black p-4 space-y-4 leading-relaxed">
            <h1 className="font-extrabold">{note.title}</h1>
            <p>{note.content}</p>
        </div>
    )
}