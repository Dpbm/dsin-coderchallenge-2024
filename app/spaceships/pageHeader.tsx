'use client';

import { ArrowLeft } from 'react-feather';
import { redirect } from 'next/navigation';

import '../pageHeader.styles.css';

export default function Header() {
	return (
		<header>
			<ArrowLeft size={40} onClick={() => redirect('/spaceships')} />
		</header>
	);
}
