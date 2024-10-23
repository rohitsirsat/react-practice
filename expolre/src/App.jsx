import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const cards = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/12882769/pexels-photo-12882769.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Card Title 1",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/16446088/pexels-photo-16446088/free-photo-of-colorful-cloths-over-house-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Card Title 2",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/22856115/pexels-photo-22856115/free-photo-of-a-blonde-woman-in-a-black-suit-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Card Title 3",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100 min-h-screen">
        {cards.map((card) => (
          <Card key={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </>
  );
}

export default App;
