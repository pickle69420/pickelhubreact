import "../styles/globals.css";
import * as React from "react";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import RegisterSW from "@/components/swreg";
import { Providers } from "./providers.js";
import clsx from "clsx";

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({children}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<RegisterSW></RegisterSW>
					<main>
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
