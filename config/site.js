import { Home2,Book,SearchNormal1,Game,Setting5 } from "iconsax-react";

export const siteConfig = {
	mainv: "1.0.0" ,
	themes: {
		light: {
			
		},
		darkgreen: {

		},
		darkblue: {

		},
		darkpurple: {

		},
	},
	navItems: [
		{
			id: 0,
			display:"Home",
			icon: Home2,
			import: "home.js",
		},
		{
			id: 1,
			display:"News",
			icon: Book,
			import: "news.js",
		},
		{
			id: 2,
			display:"Web",
			icon: SearchNormal1,
			import: "browser.js",
		},
		{
			id: 3,
			display:"Games",
			icon: Game,
			import: "games.js",
		},
		{
			id: 4,
			display:"Settings",
			icon: Setting5,
			import: "settings.js",
		}
	],
};
