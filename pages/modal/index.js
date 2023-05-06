import { useState } from "react";

export default function Modal() {
    const [modal, setModal] = useState(false);

    return (
    <>
    <div className="flex justify-center items-center flex-col gap-[20px]">
        <button onClick={() => setModal(true)}
        className ="rounded-xl py-[10px] px-[20px] bg-purple-400 text-white"> 
        Buka Modal
        </button>

        {Modal ? (
            <div className="justify-center items-center flex w-[500px] h-[500px] bg-green-500">
            </div>
        ) : ("")}
    </div>
    </>

    );
}