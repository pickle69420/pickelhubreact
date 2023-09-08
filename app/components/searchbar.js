'use client'
import { xor } from "../scripts/codec";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    var submit = useRef(null);
    function handleSubmit(e) {
        if (e.code == "Enter") {
            router.push("/~uv/"+xor.encode(submit.current.value));
        }
    }
    return (
        <input ref={submit} onKeyDown={handleSubmit} placeholder="Search the web..." className="fixed left-0 top-0 flex w-96 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"></input>
    );
}