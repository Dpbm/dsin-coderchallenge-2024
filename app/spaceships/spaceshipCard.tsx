import { SpaceshipPreview } from '../types/spaceship';
import Image from 'next/image';

import './spaceshipCard.styles.css';

type SpaceshipCardProps = {
	spaceship: SpaceshipPreview;
};

export default function SpaceshipCard({ spaceship }: SpaceshipCardProps) {
	return (
		<a
			className='spaceship-edit-link'
			href={`/spaceships/edit/${spaceship.id}`}
		>
			<div className='spaceship-card'>
				<Image
					src={spaceship.image}
					alt='image da nave'
					width={400}
					height={280}
				></Image>
				<div className='spaceship-data'>
					<p className='spaceship-name'>
						{spaceship.name}{' '}
						<i className='spaceship-id'>#{spaceship.id}</i>
					</p>

					<p className='spaceship-size'>Tamanho - {spaceship.size}</p>
					<p className='spaceship-color'>{spaceship.color}</p>
				</div>
			</div>
		</a>
	);
}