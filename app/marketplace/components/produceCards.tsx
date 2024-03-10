import React from 'react'
import PCard from './card';

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
                <PCard title={item.title} img={item.img} price={item.price} key={index}></PCard>
            ))}
        </div>
    </div>
    
  )
}

export default ProduceCards
