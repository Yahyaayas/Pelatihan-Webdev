import Button from "@/component/Button";

import { useState } from "react";


export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [letter, setLetter] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to || !message) {
      alert("Please fill all the form!");
    return;
  }
  var x = message.length;
  var y = from.length;
  var z = to.length;
    if (message.length > 100 || from.length > 20 || to.length > 20) {
      alert("Please enter the number of characters accordingly");
      return;
    }

    setLetter([...letter, {id: Date.now(), from, to, message }]);
    setFrom("");
    setTo("");
    setMessage("");
  };

  const handleDelete = (id) => {
    setLetter(letter.filter((letter) => letter.id !== id));
  };

  
  return (
  <>
    <head>
      <title>Send Your Letter</title>
    </head>
    
    {/* Navbar start */}
      <div class ="flex flex-col justify-center items-center gap-[10px] bg-slate-700 h-[100px] font-semibold text-gray-50 text-[25px]">
        Sent Your Letter
      </div>
    {/* Navbar end */}

    {/* Content start */}
      <div className = "justify-between items-end flex flex-row m-[30px] rounded-lg mx-2">
        <div className="px-[50px] mb-10">
          <h1 className = "text-[20px] font-semibold text-black-50 text-start">
          To send a letter is a good way to go somehere without moving anything but your heart
          </h1>
          <h1 className = "text-[20px] font-semibold text-black-50 text-end mt-4">
          -Phyllis Theroux
          </h1>
        </div>
        <form onSubmit={handleSubmit} className = "flex flex-col items-start gap-2 mt-[20px] mx-2 py-[5px] px-[10px] bg-slate-200 rounded-lg shadow-md">
            <div className = "text-[10px] flex flex-row items-start gap-2">
                <h4 className = "italic">from </h4>
                <input type="text" className="ring-[2px] ring-inset ring-black-200 rounded-lg p-[3px] placeholder:italic placeholder:font-thin"
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                  value={from}
                  id="from"
                  placeholder="max 20 characters"
                />
            </div>
            <div className = "text-[10px] flex flex-row items-start gap-2 ml-[12px]">
                <h4 className = "italic">to </h4>
                <input type="text" className="ring-[2px] ring-inset ring-black-200 rounded-lg p-[3px] placeholder:italic placeholder:font-thin"
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                  value={to}
                  id="to"
                  placeholder="max 20 characters"
                />
            </div>
            <div className = "text-[10px] text-left align-top flex flex-col items-start gap-2">
                <h4 className = "text-[10px] italic">message </h4>
                <textarea type="text" className="text ring-[2px] ring-inset ring-black-200 rounded-lg px-[4px] pb-[30px] pr-[38px] p-[3px] placeholder:italic placeholder:font-thin"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  id="message"
                  placeholder="max 100 characters"
                />
            </div>
            <Button type="send" className="text-[10px] italic p-[3px] bg-slate-700 rounded-lg m-[2px]"/>
          </form>
        </div>
        {/* Content end */}

        {/* Output content start */}
      <div className="flex flex-wrap ali gap-[5px] p-[10px]">
      {letter.map((letter) => (
        <div  
          key={letter.id}
          className = "flex flex-row items-start justify-between w-[200px] py-[20px] bg-slate-200 shadow-inner rounded-xl py-[10px] px-[20px]">
              <div className = "flex flex-col items-start gap-2">
                  <h4 className = "text-[10px] italic">Dear {letter.to}</h4>
                  <p className = "text-[10px] italic flex flex-col columns-[150px]">
                    {letter.message}
                  </p>
                  <h4 className = "text-[10px] italic">- {letter.from}</h4>
              </div>
              <div className = "flex flex-col items-start gap-2">
                  <Button type="X" className="text-[10px] italic p-[3px] bg-red-500 hover:bg-red-600 text-white text-[5px] italic py-1 px-2 rounded" onClick={() => handleDelete(letter.id)}/>
              </div>
        </div>
        /* Output content end */
        ))}
      </div>
  </>
  );
}