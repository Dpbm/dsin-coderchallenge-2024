'use client';

import { useEffect, useState } from 'react';
import { caughtAlien } from './aliens';

import './capture.styles.css';
import ReactConfetti from 'react-confetti';

type CaptureProps = {
	isAGroup: boolean;
	alienName: string;
};

export default function Capture({ isAGroup, alienName }: CaptureProps) {
	const [capturing, setCapturing] = useState(false);
	const [caught, setCaught] = useState(false);

	useEffect(() => {
		if (!capturing) return () => {};

		setTimeout(() => {
			const wasCaught = caughtAlien();

			if (!wasCaught) alert(`${alienName} escapou`);

			setCaught(wasCaught);
			setCapturing(false);
		}, 3000);
	}, [capturing]);

	return (
		<div id='caught-container'>
			{caught ? (
				<ReactConfetti
					width={window.innerWidth - 30}
					height={window.innerHeight}
				/>
			) : null}

			<img
				id={caught ? 'pokeball-disabled' : 'pokeball-enabled'}
				src='/pokeball.png'
				onClick={() => (caught ? {} : setCapturing(true))}
				style={{ animation: capturing ? 'caught 4s' : 'none' }}
			/>

			{caught ? (
				<p id='caught-message'>
					Você capturou {isAGroup ? ' um grupo de ' : ' um '}{' '}
					{alienName}
				</p>
			) : (
				<></>
			)}
		</div>
	);
}
