import "./App.css";
import { items } from "./Utils/items";
import dateDiffFromCurrentDate from "./Utils/DateUtils";
import { useEffect, useState } from "react";
import CountdownSection from "./components/CountdownSection";
import ItemTable from "./components/ItemTable";
import { FaPaperclip } from "react-icons/fa";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(dateDiffFromCurrentDate());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeLeft(dateDiffFromCurrentDate());
    }, 1000);

    return () => clearInterval(timeInterval); // cleanup
  }, []);

  return (
    <>
      <div className="w-full">
        <h1 className="font-dancing text-purple-950 text-4xl pb-5">
          👶🏻 Baby Is Coming Soon!! 🐒
        </h1>
        <h2 className="text-purple-950 text-3xl pb-5">In November 6, 2025</h2>
        <CountdownSection timeLeft={timeLeft} />

        <div className="rounded-lg px-3.5 py-3.5 bg-gradient-to-r from-amber-300 to-amber-200">
          <h2 className="text-pink-950 text-xl font-bold flex p-3">
            Things to purchase:
          </h2>

          {/* Table*/}
          <ItemTable items={items} />
        </div>
      </div>
    </>
  );
};

export default App;
