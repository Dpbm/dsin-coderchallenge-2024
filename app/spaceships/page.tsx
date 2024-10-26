import { SpaceshipPreview } from '../types/spaceship';
import SpaceshipCard from './spaceshipCard';
import { Home } from 'react-feather';

import './page.styles.css';

export default async function Spaceships() {
	const res = await fetch(process.env.URL + '/api/spaceships');
	const spaceships = await res.json();

	return (
		<main>
			<header>
				<a href='/'>
					<Home size={40} />
				</a>
			</header>

			{spaceships.length <= 0 ? (
				<div id='no-spaceships'>
					<h1>Nenhuma nave cadastrada</h1>
					<a href='/spaceships/add' id='add-spaceship'>
						Cadastrar
					</a>
				</div>
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
