import { useState, useEffect, useRef } from 'react';
import Router from 'next/router';
import head from 'next/head';
import Link from 'next/link';

export default function Reacthooks() {
    const pemberitahuan = () => {
      alert('Hello World');
    }
    const [jeniskelamin, setjeniskelamin] = useState('laki-laki');
    const [kuadrat, setkuadrat] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
        console.log('useEffect completed');
        inputRef.current.value="tulis ulang disini";
        }, [jeniskelamin]);
    const inputRef = useRef();

    return( 
    <>
    <heead>
      <title>React Hooks|Pelatihan Webdev</title>
    </heead>


    <div className="flex flex-col items-center justify-center gap-[10px] text-[15px]">
      <button onClick={pemberitahuan}>coba klik</button>

      <button onClick={() => setjeniskelamin('laki-laki')}>Saya laki-laki</button>
      <button onClick={() => setjeniskelamin('perempuan')}>Saya perempuan</button>
        <p>Anda adalah seorang {jeniskelamin}</p>
    
        <button onClick={() => setkuadrat(kuadrat+2)}>kelipatan 2</button>
        <p>angka kelipatan 2 adalah {kuadrat}</p>

        <input type="text" placeholder="ketik sesuatu disini"
        onChange={(e) => setText(e.target.value)}className="ring-[5px] ring-inset ring-blue-400 p-[6px]" 
        ref={inputRef}/>
        <p>Anda mengetik: {text}</p>

        <button onClick={() => Router.push('/test')}>
          Pergi jauh jangan lupa puang
          </button>

        <Link href="/test">
          <button>pergi ke test wooo</button>
        </Link>


     </div>
    </>

    );
  }