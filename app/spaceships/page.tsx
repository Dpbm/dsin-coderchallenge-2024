import { SpaceshipPreview } from '../types/spaceship';
import SpaceshipCard from './spaceshipCard';
import NoSpaceships from './noSpaceships';
import Header from '../pageHeader';

import './page.styles.css';

export const revalidate = 0;

export default async function Spaceships() {
	let spaceships = [];
	try {
		const res = await fetch(process.env.URL + '/api/spaceships');
		spaceships = await res.json();
	} catch (error) {
		console.error(`Failed on get Spaceships: ${error}`);
	}

	return (
		<main>
			<Header />

			{spaceships.length <= 0 ? (
				<NoSpaceships />
			) : (
				<div id='spaceships-list'>
					<h1>Todas as naves cadastradas</h1>
					<nav id='spaceships-actions'>
						<a href='/spaceships/add'>Adicionar Nova Nave</a>
						{spaceships.length > 0 ? (
							<a href='/spaceships/classify'>
								Ver Classificação das Naves
							</a>
						) : (
							<></>
						)}
					</nav>

					<div id='cards-container'>
						{spaceships.map(
							(spaceship: SpaceshipPreview, index: number) => (
								<SpaceshipCard
									spaceship={spaceship}
									key={index}
								/>
							)
						)}
					</div>
				</div>
			)}
		</main>
	);
}
