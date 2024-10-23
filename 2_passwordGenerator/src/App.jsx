import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [addNum, setAddNum] = useState(false);
  const [addChar, setAddChar] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";

    if (addNum) str += "0123456789";
    if (addChar) str += "!@#$%^&*()_+}{[]:;?><,./~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, addChar, addNum, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, addChar, addNum, passwordGenerator]);

  const copyPassToClip = useCallback(() => {
    window.navigator.clipboard.writeText(Password);

    passwordRef.current?.select();

    // to select from range x to y
    // passwordRef.current?.setSelectionRange(3, 8);
  }, [Password, length]);

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-xl text-center space-y-6 animate-fade-in-down">
          <h2 className="text-3xl font-bold text-orange-500 drop-shadow-lg">
            Password Generator
          </h2>

          <div className="flex justify-center items-center space-x-4">
            <input
              className="outline-none py-2 px-4 rounded-md w-64 bg-gray-800 text-lg text-gray-100 font-semibold shadow-inner"
              type="text"
              readOnly
              placeholder="Password"
              value={Password}
              ref={passwordRef}
            />
            <button
              className="text-white bg-orange-500 px-3 py-2 rounded-md hover:bg-orange-600 transition-transform transform hover:scale-105 shadow-lg"
              onClick={copyPassToClip}
            >
              Copy
            </button>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <div>
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                className="cursor-pointer accent-orange-500"
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="text-gray-300 ml-2">Length: {length}</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                defaultChecked={addNum}
                className="cursor-pointer accent-orange-500"
                onChange={() => setAddNum((prev) => !prev)}
              />
              <label className="text-gray-300">Numbers</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                defaultChecked={addChar}
                className="cursor-pointer accent-orange-500"
                onChange={() => setAddChar((prev) => !prev)}
              />
              <label className="text-gray-300">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
