export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Croppy Deals",
	description: "Find some a-maize-ing deals on local produce!",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Marketplace",
      href: "/marketplace",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [

	],
	links: {
	// 	github: "https://github.com/nextui-org/nextui",
	// 	twitter: "https://twitter.com/getnextui",
	// 	docs: "https://nextui.org",
	// 	discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev"
	},
};
