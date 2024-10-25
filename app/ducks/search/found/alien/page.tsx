'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { redirect } from 'next/navigation';


export default function Xenophagus(){
    return (
        <>
         <DotLottieReact 
            loop 
            autoplay
            style={{ height: '300px', width: '300px' }}
            src="/danger.lottie"/>
            <h1>É um FU***** xenófago!</h1>
            <button onClick={() => redirect('/ducks/search/found/alien/capture')}>entrar em modo de emergência!</button>

            <a href='/ducks/search'>Procurar mais!</a>
            <a href='/ducks'>Voltar ao inicio!</a>
        </>
       
    );
}