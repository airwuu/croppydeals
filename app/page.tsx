'use client';
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-3 py-4 md:py-5">
				<div className="inline-block max-w-lg text-center justify-center items-center">
					<img src="https://media.discordapp.net/attachments/1215882951724896298/1215906606047297596/IMG_0067.png?ex=65fe7445&is=65ebff45&hm=1be92efb4887c9b056d4ead00e1544308318a390393d1708cd897038343f7d69&=&format=webp&quality=lossless&width=1722&height=978"/>	
					<h1 className={title()}>Discover&nbsp;produce&nbsp;in&nbsp;the </h1>
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
						href="#about"
					>
						About
					</Link>
				</div>
				<div className="pt-20"/>
			</section>
			<section id="about" className="flex flex-col gap-8 items-center">
				<div>
					<h1 className={title()}>a bout</h1>
				</div>
				<div>
					<h1 className={title()}>b</h1>
				</div>
				<div>
					<h1 className={title()}>c</h1>
				</div>
				<div>
					<h1 className={title()}>d</h1>
				</div>
				<div>
					<h1 className={title()}>e</h1>
				</div>
				<div>
					<h1 className={title()}>f</h1>
				</div>
			</section>
			<section className="flex flex-col gap-8 items-center pt-20">
				<h1 className={title()}>Frequently Asked Questions</h1>
				<div className="w-3/4">
					<Accordion selectionMode="multiple" variant="splitted">
						<AccordionItem key="1" aria-label="Why are you so sad?" title="Why are you so sad?">
							{"I don't know"}
						</AccordionItem> 
						<AccordionItem key="2" aria-label="Why?" title="Why?">
							{"Yes"}
						</AccordionItem>
						<AccordionItem key="3" aria-label="Are you.." title="Are you..">
							{"No"}
						</AccordionItem>
					</Accordion>
				</div>	
			</section>
		</>
	);
}
