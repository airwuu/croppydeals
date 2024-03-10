import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Cardmodal from './cardmodal';

const ProduceCards = () => {
    const list = [
        {
          title: "Orange",
          img: "/images",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/images",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "/images",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "/images",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "/images",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "/images",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "/images",
          price: "$12.20",
        },
    ];
  return (
    <div className='flex flex-row justify-center mx-3 pl-5'>
        <div  className="cards flex flex-row justify-start flex-wrap gap-5 max-w-7xl pt-9">
            {list.map((item, index) => (
                <Card className=" w-44" shadow="sm" key={index} isPressable onPress={() => console.log("hello")}>
                <CardBody className="overflow-visible p-0">
                    <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    // alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}</p>
                </CardFooter>
                </Card>
            ))}
        </div>
    </div>
    
  )
}

export default ProduceCards
