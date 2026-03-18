import { notes } from "@/public/note";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { use } from "react";
export default function Sidebar(){
    const searchParams = useSearchParams()
    const searchKey = searchParams.get("key")
    return (
        <div className="h-screen w-64 flex flex-col space-between justify-start bg-purple-950 gap-4 p-4 font-semibold 
            text-yellow-50 font-mono">
            {notes.map((note)=>(
                <Link href={`/?key=${note.slug}`}  key={note.slug}>
                <div className={` rounded-md hover:bg-blue-400 hover:scale-105 transition-all duration-300 pl-2 ${searchKey === note.slug
                    ?"border-2 border-blue-600":""
                }`}>
                    <p>{note.title}</p>
                </div>
                </Link>
            ))}
        </div>
    )
}