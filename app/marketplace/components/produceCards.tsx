import React, { useEffect, useState } from 'react';
import { collection, getDocs, DocumentData } from 'firebase/firestore';
import { firestore } from '../../../firebase/firebase';
import PCard from './card';

interface ProduceItem {
  item: string;
  img: string;
  price: number;
}

const ProduceCards = () => {
  const [produceList, setProduceList] = useState<ProduceItem[]>([]);

  useEffect(() => {
    const fetchProduceData = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'produce'));
      const data = querySnapshot.docs.map(doc => doc.data() as ProduceItem);
      setProduceList(data);
    };
    void fetchProduceData();
  }, []);

  return (
    <div className='flex flex-row justify-center mx-3 pl-5'>
      <div className="cards flex flex-row justify-start flex-wrap gap-5 max-w-7xl pt-9">
        {produceList.map((item, index) => (
          <PCard
            title={item.item}
            img={item.img}
            price={item.price}
            key={index}
          ></PCard>
        ))}
      </div>
    </div>
  );
};

export default ProduceCards;
