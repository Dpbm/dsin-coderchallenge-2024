import { SpaceshipClassification } from '@/app/types/spaceship';

import './spaceshipCard.styles.css';

type SpaceshipCardProps = {
	spaceship: SpaceshipClassification;
};

export default function SpaceshipCard({ spaceship }: SpaceshipCardProps) {
	return (
		<a
			href={`/spaceships/edit/${spaceship.id}`}
			className='spaceship-edit-link'
		>
			<div className='spaceship-card'>
				<img
					src={spaceship.image}
					alt={`imagem da nave ${spaceship.id}`}
				></img>
				<div className='spaceship-data'>
					<p>{spaceship.name}</p>
					<p>{spaceship.size}</p>
					<p>{spaceship.damage}</p>
					<p>Movido a {spaceship.gas}</p>
					<p>Periculosidade: {spaceship.danger}</p>
					<p>Valor: {spaceship.value}</p>
					<p>Poder militar: {spaceship.military_power}</p>
					<p className='spaceship-classification'>
						classificação: {spaceship.classification}
					</p>
				</div>
			</div>
		</a>
	);
}
