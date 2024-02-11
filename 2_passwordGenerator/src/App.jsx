import { useCallback, useEffect, useRef, useState } from "react";

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
    // passwordRef.current?.setSelectionRange(0, 3);
    passwordRef.current?.setSelectionRange(length);
  }, [Password]);

  return (
    <>
      <div className="w-full h-screen bg-black text-orange-500">
        <div className="flex justify-center">
          <div className="bg-gray-700 rounded-sm p-2 flex flex-col items-center space-y-3">
            <h2 className="text-white">Password Generator</h2>

            <div className="flex">
              <input
                className="outline-none py-1 px-2 rounded-md w-full"
                type="text"
                readOnly
                placeholder="Password"
                value={Password}
                ref={passwordRef}
              />
              <button
                className=" text-white bg-blue-700 px-2 py-1 rounded-md hover:bg-blue-600"
                onClick={copyPassToClip}
              >
                copy
              </button>
            </div>

            <div className="flex gap-x-2">
              <div>
                <input
                  type="range"
                  min={8}
                  max={30}
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label>length: {length}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  defaultChecked={addNum}
                  onChange={() => {
                    setAddNum((prev) => !prev);
                  }}
                />
                <label>Numbers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  defaultChecked={addChar}
                  onChange={() => {
                    setAddChar((prev) => !prev);
                  }}
                />
                <label>Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
