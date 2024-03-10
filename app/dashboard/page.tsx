'use client';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Textarea} from "@nextui-org/react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { collection, getDocs, doc, updateDoc, addDoc } from "firebase/firestore";
import { firestore, serverStamp, auth } from '../../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const data = [
	{
	  name: 'Strawberry',
	  revenue: 4000,
	  quantity: 2400,
	  amt: 2400,
	},
	{
	  name: 'Melon',
	  revenue: 3000,
	  quantity: 1398,
	  amt: 2210,
	},
	{
	  name: 'Berries',
	  revenue: 2000,
	  quantity: 9800,
	  amt: 2290,
	},
	{
	  name: 'Squash',
	  revenue: 2780,
	  quantity: 3908,
	  amt: 2000,
	},
	{
	  name: 'Corn',
	  revenue: 1890,
	  quantity: 4800,
	  amt: 2181,
	},
	{
	  name: 'Potato',
	  revenue: 2390,
	  quantity: 3800,
	  amt: 2500,
	},
	{
	  name: 'Tomato',
	  revenue: 3490,
	  quantity: 4300,
	  amt: 2100,
	},
  ];


export default function DocsPage() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [user] = useAuthState(auth);
	return (
		<div>
			<div className="pb-10">
				<h1 className={title()}>Your Dashboard</h1>
			</div>
			<section>
				<div className="grid grid-cols-5 grid-rows-5 gap-4">
					<div className="col-span-3 row-span-2 col-start-3 row-start-4 bg-gray-100 rounded-lg p-6">
						control your items
						<div className="flex flex-row gap-3">

						</div>
					</div>
					<div className="col-span-3 row-span-3 col-start-3 row-start-1 bg-gray-100 rounded-lg p-6">
						<div className="flex flex-col justify-center gap-3">
							<h1 className="text-2xl  pb-3 text-left font-bold">MONTHLY SALES</h1>
							<BarChart
							width={650}
							height={300}
							data={data}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5
							}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="quantity" fill="#8884d8" />
								<Bar dataKey="revenue" fill="#82ca9d" />
							</BarChart>
							<div className="flex flex-row gap-3">
								<Button>Monthly</Button>
								<Button>Yearly</Button>
								<Button>Lifetime</Button>
							</div>
						</div>
					</div>
					<div className="col-span-2 col-start-1 row-start-1 bg-gray-100 rounded-lg p-6">
						<div className="flex flex-col justify-center">
							<h1 className="text-2xl  pb-3 text-left font-bold">ACTIONS</h1>
							<div className="flex flex-row gap-3">
								{user? <><Button color="success" onPress={onOpen} >Sell something!</Button> <Button color="primary"  >Edit posts</Button></>:<><Button isDisabled color="success" onPress={onOpen} >Sell something!</Button><Button isDisabled color="primary"  >Edit posts</Button></>}
							</div>
						</div>
					</div>
					<div className="col-span-2 row-span-4 col-start-1 row-start-2 bg-gray-100 rounded-lg p-6">
						<div className="flex flex-col justify-center">
							<h1 className="text-2xl  pb-3 text-left font-bold">STATISTICS</h1>
							<div className="flex gap-2">
								<h2>Lifetime Earnings:</h2>
								<p>{"$"+10128392}</p>
							</div>
							<hr className=" w-full h-1 mx-auto my-4 "></hr>
							<div className="flex gap-2">
								<h2>Most Sold Item (2024):</h2>
								<p>{"Strawberries"}</p>
							</div>
							<div className="flex gap-2">
								<h2>Yearly Earnings (2024):</h2>
								<p>{"$"+10128392}</p>
							</div>
						</div>
					</div>
				</div>

			</section>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sell Produce!</ModalHeader>
              <ModalBody>
				<div className="flex gap-3">
				<Input type="name" label="Item Name" />
				<Input type="number" label="price" className="w-1/3"/>
				</div>

				<Textarea
      label="Description"
      placeholder="Enter your description"

    />
	<Input type="url" label="image url"
	startContent={
		<div className="pointer-events-none flex items-center">
		  <span className="text-default-400 text-small">https://</span>
		</div>
	  }/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
            		color="success"
            		onPress={async () => {
						  // Get the values from the form fields
						  const itemNameInput = document.querySelector<HTMLInputElement>('input[type="name"]');
						  const priceInput = document.querySelector<HTMLInputElement>('input[type="number"]');
						  const descriptionInput = document.querySelector<HTMLTextAreaElement>('textarea');
						  const imageUrlInput = document.querySelector<HTMLInputElement>('input[type="url"]');

						  if (!itemNameInput || !priceInput || !descriptionInput || !imageUrlInput) {
							console.error('Form field not found');
							return;
						  }

						  const itemName = itemNameInput.value;
						  const price = parseFloat(priceInput.value);
						  const description = descriptionInput.value;
						  const imageUrl = imageUrlInput.value;

						  // Add a new document with the form field values to the "produce" collection
						  await addDoc(collection(firestore, 'produce'), {
							  item: itemName,
							  price: price,
							  desc: description,
							  img: imageUrl,
							  amt: 1,
							  date: serverStamp.now(),
						  });

						// Close the modal
						onClose();
					}}
          		>
            	Submit
				</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
		</div>

	);
}
