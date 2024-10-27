'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Header from '../pageHeader';

import './page.styles.css';
import '../pageHeader.styles.css';

export default function Ducks() {
	return (
		<main>
			<Header />

			<div id='data-container'>
				<DotLottieReact
					loop
					autoplay
					style={{ height: '300px', width: '300px' }}
					src='/lil-duck.lottie'
				/>
				<p>
					Com os Aliens a solta disfarçados de patos. Precisamos da
					sua ajuda para encontrá-los. Clique no Botão abaixo e
					encontre as ameaças que estão a solta por ai.
				</p>
				<a href='/ducks/search' id='search-button'>
					Procurar Aliens
				</a>
			</div>
		</main>
	);
}
