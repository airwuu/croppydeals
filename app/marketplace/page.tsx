import { title } from "@/components/primitives";
import {Input} from "@nextui-org/react";

export default function DocsPage() {
	return (
		<>
			<div>
				<h1 className={title()}>Marketplace</h1>
				<Input
					label="Search for produce"
					isClearable
					radius="lg"
					classNames={{
					label: "text-black/50 dark:text-white/90",
					input: [
						"bg-transparent",
						"text-black/90 dark:text-white/90",
						"placeholder:text-default-700/50 dark:placeholder:text-white/60",
					],
					innerWrapper: "bg-transparent",
					inputWrapper: [
						"shadow-xl",
						"bg-default-200/50",
						"dark:bg-default/60",
						"backdrop-blur-xl",
						"backdrop-saturate-200",
						"hover:bg-default-200/70",
						"dark:hover:bg-default/70",
						"group-data-[focused=true]:bg-default-200/50",
						"dark:group-data-[focused=true]:bg-default/60",
						"!cursor-text",
					],
					}}
					placeholder="Type to search..."
				/>
				</div>
		</>
	);
}
