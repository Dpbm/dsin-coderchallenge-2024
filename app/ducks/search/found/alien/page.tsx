'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './page.styles.css';

export default function Alien() {
	return (
		<main>
			<DotLottieReact
				loop
				autoplay
				style={{ height: '300px', width: '300px' }}
				src='/danger.lottie'
			/>
			<h1>É um FU***** alien!</h1>

			<a href='/ducks/search/found/alien/capture' id='emergency-mode'>
				Modo de emergência!
			</a>

			<div id='actions'>
				<a href='/ducks/search'>Procurar mais!</a>
				{/* eslint-disable */}
				<a href='/'>Voltar ao inicio!</a>
				{/* eslint-enable */}
			</div>
		</main>
	);
}
