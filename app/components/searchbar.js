'use client'
import { xor } from "../scripts/codec";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    var submit = useRef(null);
    function handleSubmit(e) {
        if (e.code == "Enter") {
            router.push("/~uv/"+xor.encode(submit.current.value));
        }
    }
    return (
        <input ref={submit} onKeyDown={handleSubmit} placeholder="Search the web..."></input>
    );
}