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
			<section className="p-10">

			</section>
			<section id="about" className="flex flex-col gap-8 items-center snap-center pt-20">
				<div>
					<h1 className={title({size:"lg"})}><a className="font-bold">Our Mission</a></h1>
				</div>
				<div>
					<p className="text-center">
						<a className="font-semibold">To nurture hope and opportunity in communities around the valley-</a><br></br>
						<a className="text-success-500 font-extrabold">one family, one farmer, one crop at a time</a>
					</p>
					<br></br>
				</div>
				<div className="flex gap-3 pl-20 pr-20 pb-5">
					<div className="flex flex-col gap-3">
						<div>
						<h1 className={title()}>The <a className="font-extrabold text-rose-500">Issue</a> We Want to Address:</h1>
						</div>
						<div>
							<ul className="list-disc">
								<li>The San Joaquin Valley is extremely vulnerable to <a className="font-bold underline decoration-red-500">Climate Change</a> and <a className="font-bold underline decoration-red-500">Food Insecurity</a><br></br></li>
								<li><a className="font-bold underline decoration-red-500">Corporate</a> and <a className="font-bold underline decoration-red-500">Contract Farming</a> has had a negative on our farmers, environment, and citizens</li>
								<li>Food, space, labor, and many other <a className="font-bold underline decoration-red-500">Resources are Scarce</a></li>
							</ul>
							<br></br>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<div>
							<h1 className={title()}>What We Will to <a className = "font-extrabold text-green-400">Accomplish</a></h1>
						</div>
						<div>
							{/* <p className="text-semibold">We will:</p> */}
							<ul className="list-disc">
								<li><a className="font-bold underline decoration-green-500">Break the Barriers</a> that block access to affordable and healthy food</li>
								<li><a className="font-bold underline decoration-green-500">Connect People</a> with local producers, promoting sustainable farming</li>
								<li><a className="font-bold underline decoration-green-500">Decrease Emissions</a>, pollutions, and waste coming from distant transportation and packaging</li>
							</ul>
						</div>
					</div>
					
					
				</div>
			</section>
			<section className="flex flex-col gap-8 items-center pt-20">
				<h1 className={title()}>Frequently Asked Questions</h1>
				<div className="w-3/4 h-96">
					<Accordion selectionMode="multiple" variant="splitted">
						<AccordionItem key="1" aria-label="How can I start selling?" title="How can I start selling?">
							{"Simply make an account and verify your information! Once your info has been verified, you can begin to list your produce. "}
						</AccordionItem> 
						<AccordionItem key="2" aria-label="Is my data safe?" title="Is my data safe?">
							{"Yes, we ensure that your data is secure and safe. All while we remain free to use. "}
						</AccordionItem>
						<AccordionItem key="3" aria-label="Can I use cryptocurrency as a method of payment?" title="Can I use cryptocurrency as a method of payment?">
							{"Yes, we accept Flow tokens."}
						</AccordionItem>
					</Accordion>
				</div>	
			</section>
			<section className="p-10">

			</section>
		</>
	);
}
