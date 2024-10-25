'use client';

import { useEffect, useState } from "react";
import { caughtAlien } from "./aliens";

type CaptureProps = {
    isAGroup:boolean;
    alienName:string;
}

export default function Capture({isAGroup, alienName}:CaptureProps){
    const [capturing, setCapturing] = useState(false);
    const [caught, setCaught] = useState(false);

    useEffect(() => {
        if(!capturing) return () => {};

        setTimeout(() => {
            const wasCaught = caughtAlien();

            if(!wasCaught) alert(`${alienName} fugiu`);

            setCaught(wasCaught);
            setCapturing(false);
        }, 3000);

    }, [capturing]);


    return(
        <>
             <button onClick={() => setCapturing(true)} disabled={capturing || caught===true}>
                {capturing ? `Tentando capturar ${alienName}...` : "Capturar"}
            </button>

            {caught ? <p>Você capturou {isAGroup ? " um grupo de " : " um "} {alienName}</p> : <></>}
        </>
    )
}