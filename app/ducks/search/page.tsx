'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

import './page.styles.css';

export default function SearchDuck() {
	const [searching, setSearching] = useState(true);
	const [scanning, setScanning] = useState(false);

	function randomDuck(): boolean {
		// 0 = normal duck
		// 1 = alien (60% of chance)
		return Math.random() <= 0.6;
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSearching(false);
			setScanning(true);
		}, 4000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	useEffect(() => {
		if (!scanning) return () => {};
		const timeout = setTimeout(() => {
			setScanning(false);
			const isAXenophagus = randomDuck();

			if (isAXenophagus) redirect('/ducks/search/found/alien');
			else redirect('/ducks/search/found/duck');
		}, 4000);

		return () => {
			clearTimeout(timeout);
		};
	}, [scanning]);

	if (searching) {
		return (
			<main>
				<DotLottieReact
					loop
					autoplay
					style={{ height: '300px', width: '300px' }}
					src='/searching-duck.lottie'
				/>
				<p>Procurando patos suspeitos...</p>
			</main>
		);
	}

	return (
		<main>
			<h1>Pato encontrado</h1>
			<DotLottieReact
				loop
				autoplay
				style={{ height: '300px', width: '300px' }}
				src='/scanning-duck.lottie'
			/>
			<p>Escaneando pato...</p>
		</main>
	);
}
