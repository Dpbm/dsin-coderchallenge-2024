'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import './page.styles.css';

export default function Duck() {
	return (
		<main>
			<DotLottieReact
				loop
				autoplay
				style={{ height: '300px', width: '300px' }}
				src='/clear.lottie'
			/>
			<h1>🙃Ufa, é apenas um pato comum🙃</h1>
			<div id='actions'>
				<a href='/ducks/search'>Procurar mais!</a>
				<a href='/'>Voltar ao inicio!</a>
			</div>
		</main>
	);
}
