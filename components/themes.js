'use client'
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/config/site";

export default function Provider({children}) {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme = 'darkgreen' themes={Object.keys(siteConfig.themes)}>
            {children}
        </ThemeProvider>
    )
}