'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';
import { randomDuck } from './duck';
import { redirect } from 'next/navigation';

export default function SearchDuck(){
    const [searching, setSearching] = useState(true);
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearching(false);
            setScanning(true);
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };
    }, [])

    useEffect(() => {
        if(!scanning) return () => {};
        const timeout = setTimeout(() => {
            setScanning(false);
            const isAXenophagus = randomDuck();

            if(isAXenophagus)
                redirect('/ducks/search/found/xenophagus');
            else
                redirect('/ducks/search/found/duck');
        }, 4000);
        

        return () => {
            clearTimeout(timeout);
        };
    }, [scanning]);


    if(searching){
        return (
            <>
                <DotLottieReact 
                    loop 
                    autoplay
                    style={{ height: '300px', width: '300px' }}
                    src="/searching-duck.lottie"/>
                <p>Procurando patos suspeitos...</p>
            </>
        );
    }
        
    return(
        <>
            <h1>Pato encontrado</h1>
            <DotLottieReact 
                loop 
                autoplay
                style={{ height: '300px', width: '300px' }}
                src="/scanning-duck.lottie"/>
            <p>Escaneando pato...</p>
        </>
    );
    

    


}