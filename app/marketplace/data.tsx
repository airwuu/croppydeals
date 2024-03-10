import { firestore } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";


export interface ProduceItem {
    item: string;
    item2: string;
    desc: string;
}

const getData = async (): Promise<ProduceItem[]> => {
    const ref = collection(firestore, 'produce');
    const snap = await getDocs(ref);
    const produce: ProduceItem[] = [];

    snap.forEach((doc) => {
        const { item, item2, desc } = doc.data();
        produce.push({ item, item2, desc });
    });

    return produce;
};

export const produce = getData();

// export const produce = [
//   {label: "Strawberries", value: "strawberries", description: "a"},
//   {label: "Corn", value: "corn", description: "a"},
//   {label: "Blueberries", value: "blueberries", description: "a"},
//   {label: "Potatoes", value: "potatoes", description: "a"},
//   {label: "Tomatoes", value: "tomatoes", description: "a"},
//   {label: "Grass", value: "grass", description: "a"},
// ];

export const categories = [
    {label: "Fruits", value: "fruits", description: "a"},
    {label: "Vegetables", value: "Vegetables", description: "a"},
  ];
