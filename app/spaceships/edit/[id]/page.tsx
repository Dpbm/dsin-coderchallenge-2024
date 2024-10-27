import { redirect } from 'next/navigation';
import Form from './form';
import { createHash } from 'crypto';
import Header from '../../../pageHeader';

import '../../formPage.styles.css';

type EditParams = {
	params: Promise<{
		id: number;
	}>;
};

export default async function Edit({ params }: EditParams) {
	let spaceship, id, hash;

	try {
		id = (await params).id;
		const res = await fetch(
			(process.env.URL || process.env.VERCEL_URL) +
				`/api/spaceship?id=${id}`
		);
		spaceship = await res.json();

		hash = createHash('sha256')
			.update(JSON.stringify(spaceship))
			.digest('hex');
	} catch (error) {
		console.error(`Failed on spaceship fetch: ${error}`);
		redirect('/spaceships');
	}

	return (
		<main>
			<Header />
			<div id='forms-container'>
				<h1 id='forms-title'>Editar a nave #{id}</h1>
				<Form spaceship={spaceship} initialHash={hash} />
			</div>
		</main>
	);
}
