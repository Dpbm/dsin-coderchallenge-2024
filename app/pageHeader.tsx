'use client';

import { Home } from 'react-feather';

import './pageHeader.styles.css';

export default function Header() {
	return (
		<header>
			<a href='/'>
				<Home size={40} />
			</a>
		</header>
	);
}
