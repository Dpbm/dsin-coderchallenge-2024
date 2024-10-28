import { SpaceshipClassification } from '@/app/types/spaceship';
import Header from '../../pageHeader';
import SpaceshipCard from './spaceshipCard';

import './page.styles.css';
import NoSpaceships from '../noSpaceships';

export const revalidate = 0;

export default async function Classification() {
	let spaceships = [];
	try {
		const res = await fetch(
			process.env.URL + '/api/spaceships/classification'
		);
		spaceships = await res.json();
	} catch (error) {
		console.error(`Failed on Get spaceships classification: ${error}`);
	}

	return (
		<main>
			<Header />

			{spaceships.length <= 0 ? (
				<NoSpaceships />
			) : (
				<div id='data-container'>
					<p id='data-disclaimer'>
						*A classificação das Naves é dada partir da análise do:
						tamanho, estado, tipo de combustível, grau de
						periculosidade, valor estimado e poderio militar; Feito
						pela nossa inteligencia artificial super avançada{' '}
						<strong>
							<i>JOHN</i>
						</strong>
					</p>

					<div id='cards-container'>
						{spaceships.map(
							(
								spaceship: SpaceshipClassification,
								index: number
							) => {
								return (
									<SpaceshipCard
										spaceship={spaceship}
										key={index}
									/>
								);
							}
						)}
					</div>
				</div>
			)}
		</main>
	);
}
