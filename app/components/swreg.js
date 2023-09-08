'use client'
import { useEffect } from "react"

export default function RegisterSW() {
    useEffect(async ()=>{
        await import("~/scripts/registerSw");
    });
    return (
        <></>
    );
}