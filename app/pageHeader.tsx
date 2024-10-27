import { Home } from 'react-feather';

import './pageHeader.styles.css';

export default function Header() {
	return (
		<header>
			{/* eslint-disable */}
			<a href='/'>
				<Home size={40} />
			</a>
			{/* eslint-enable */}
		</header>
	);
}
