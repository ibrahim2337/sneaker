import { useState } from "react";
import { RiFlashlightLine, RiFireLine, RiShiningLine } from "react-icons/ri";

const cards = [
  {
    title: "Awesome Card 01",
    description: "Gradient card, with bright edges that gives it a cool look.",
    icon: <RiFlashlightLine className="text-4xl" />,
    hue1: 210,
    hue2: 238,
  },
  {
    title: "Awesome Card 02",
    description: "Gradient card, with bright edges that gives it a cool look.",
    icon: <RiFireLine className="text-4xl" />,
    hue1: 300,
    hue2: 30,
  },
  {
    title: "Awesome Card 03",
    description: "Gradient card, with bright edges that gives it a cool look.",
    icon: <RiShiningLine className="text-4xl" />,
    hue1: 180,
    hue2: 50,
  },
];

export default function ProductCard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

function Card({ card }) {
  const { title, description, icon, hue1, hue2 } = card;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center p-10 text-white text-center border-4 border-transparent rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: `linear-gradient(hsl(${hue1}, 85%, 70%) 0%, hsl(${hue2}, 70%, 55%) 100%)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-36 h-36 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-600 flex items-center justify-center">
          <div className="w-28 h-28 bg-gradient-to-r from-blue-700 to-indigo-500 rounded-xl flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-sm">{description}</p>
        <a
          href="#"
          className="mt-4 px-5 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-300 transition"
        >
          Continue learning
        </a>
      </div>
      {hovered && (
        <div className="absolute inset-0 bg-opacity-40 blur-3xl transition-all duration-300 scale-150" />
      )}
    </div>
  );
}
