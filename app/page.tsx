import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Discover&nbsp;produce&nbsp;in the&nbsp;</h1>
				<h1 className={title({ color: "green" })}>San&nbsp;Joaquin&nbsp;Valley&nbsp;</h1>
				<br />
				<h2 className={subtitle({ class: "mt-4" })}>
					Fresh. Secure. Delicious.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					href={siteConfig.navItems[1].href}
					className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
				>
					Marketplace
				</Link>
				<Link
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.navItems[2].href}
				>
					About
				</Link>
			</div>

			{/* <div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
		</section>
	);
}
