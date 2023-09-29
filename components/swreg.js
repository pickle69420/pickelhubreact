'use client'
import { useEffect } from "react"

export default function RegisterSW() {
    const register = async () => {
        await import("@/scripts/registerSW");
    };
    useEffect(()=>{
        register();
    });
    return (
        <></>
    );
}