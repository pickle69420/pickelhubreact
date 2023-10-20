import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

export default function useColors() {
    const { theme } = useTheme();
    const colors = siteConfig.themes[theme]
    return colors
}