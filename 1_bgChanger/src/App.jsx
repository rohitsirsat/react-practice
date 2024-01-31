import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 p-4"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center">
        <div className="inline-block">
          <ul className="flex flex-wrap bg-white text-white space-x-2 p-2 rounded-lg">
            <li>
              <div>
                <button
                  className="bg-red-700 py-2 px-4 rounded-lg"
                  onClick={() => setColor("red")}
                >
                  red
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  className="bg-blue-700 py-2 px-4 rounded-lg"
                  onClick={() => setColor("blue")}
                >
                  blue
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  className="bg-green-700 py-2 px-4 rounded-lg"
                  onClick={() => setColor("green")}
                >
                  green
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  className="bg-black py-2 px-4 rounded-lg"
                  onClick={() => setColor("black")}
                >
                  Default
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
