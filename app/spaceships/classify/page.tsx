import { SpaceshipClassification } from '@/app/types/spaceship';
import Header from '../pageHeader';
import SpaceshipCard from './spaceshipCard';

import './page.styles.css';

export default async function Classification() {
	const res = await fetch(process.env.URL + '/api/spaceships/classification');
	const spaceships = await res.json();

	return (
		<main>
			<Header />

			<div id='data-container'>
				<p id='data-disclaimer'>
					*A classificação das Naves é dada partir da análise do:
					tamanho, estado, tipo de combustível, grau de
					periculosidade, valor estimado e poderio militar; Feito pela
					nossa inteligencia artificial super avançada{' '}
					<strong>
						<i>JOHN</i>
					</strong>
				</p>

				<div id='cards-container'>
					{spaceships.map(
						(spaceship: SpaceshipClassification, index: number) => {
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
		</main>
	);
}
