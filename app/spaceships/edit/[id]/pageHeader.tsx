'use client';

import { ArrowLeft } from 'react-feather';
import { redirect } from 'next/navigation';

export default function Header() {
	return (
		<header>
			<ArrowLeft size={40} onClick={() => redirect('/spaceships')} />
		</header>
	);
}
