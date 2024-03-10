'use client';
import React, { useState, useEffect } from 'react';
import { title } from "@/components/primitives";
import {Autocomplete, AutocompleteItem, Select, SelectItem, Button} from "@nextui-org/react";
import {produce, categories, ProduceItem } from "./data";
import ProduceCards from "./components/produceCards";

export default function DocsPage() {
    const [produceData, setProduceData] = useState<ProduceItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await produce;
            setProduceData(data);
        };
    }, []);

	return (
		<div>
			<div>
				<h1 className={title()}>Marketplace</h1>
			</div>
			<section className="search flex flex-row justify-center items-center w-full pt-10 gap-5">
				<Autocomplete 
					allowsCustomValue
					label="Search for produce"
					variant="bordered"
					className="max-w-1/2 w-1/2" 
					defaultItems={produceData}
					>
					{(item) => <AutocompleteItem key={item.item2}>{item.item}</AutocompleteItem>}
				</Autocomplete>

				<Select
				label="Filter by Category"
				variant="bordered"
				selectionMode="multiple"
				className="max-w-xs"
				>
					{categories.map((category) => (
						<SelectItem key={category.value} value={category.value}>
						{category.label}
						</SelectItem>
					))}
				</Select>
				<Button color="danger" size="lg">
					Search
				</Button>  
			</section>
			<section className="cards flex flex-row justify-center flex-wrap">
				<ProduceCards></ProduceCards>
			</section>
		</div>
	);
}
