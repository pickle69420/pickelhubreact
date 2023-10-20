import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import RegisterSW from "@/components/swreg";
import clsx from "clsx";
import Provider from "@/components/themes";

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
				<Provider>
					<RegisterSW></RegisterSW>
					{children}
				</Provider>
			</body>
		</html>
	);
}
