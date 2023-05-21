import clsx from 'clsx';

export default function Button({ type = "send", className, onClick = () => {}}) {
    const btntype = type => {
        if (type === "send")
        return "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
        else if (type === "X")
        return "bg-red-500 hover:bg-red-600 text-white text-[5px] italic py-1 px-2 rounded";
    };
        
    
    return (
        <>
        <button type={type} className={clsx(btntype(type), className)} onClick={onClick}>
            {type}
        </button>
        </>
    );
}