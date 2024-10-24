'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Duck(){
    return (
        <>
            <DotLottieReact 
            loop 
            autoplay
            style={{ height: '300px', width: '300px' }}
            src="/clear.lottie"/>
            <h1>Ufa, é apenas um pato comum 🙃</h1>
            <a href='/ducks/search'>Procurar mais!</a>
            <a href='/ducks'>Voltar ao inicio!</a>
        </>
        
        
    );

}