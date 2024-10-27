import { getAlien, getSituation } from './aliens';
import Capture from './capture';
import { Home } from 'react-feather';

import './page.styles.css';
import '../../../../../pageHeader.styles.css';

export default function Attack() {
	const alien = getAlien();
	const situation = getSituation();

	const attack =
		alien.attacks[situation.group ? 'group' : 'alone'][
			situation.distant ? 'distant' : 'close'
		];

	return (
		<main>
			<header>
				<a href='/'>
					<Home size={40} />
				</a>
			</header>
			<div id='data-container'>
				<div id='situtation-header'>
					<p id='situation-text'>{situation.story}</p>
					<p id='alien-presentation'>
						Você encontrou o {alien.name}!!!!
					</p>
				</div>

				<div id='alien-container'>
					<div id='alien-data'>
						<img
							src={alien.image}
							alt={`Imagem do ${alien.name}`}
						/>
						<p id='alien-power'>Poder: {alien.power}+</p>
					</div>
					<div>
						<h1>História do {alien.name}</h1>
						<p id='alien-story'>{alien.story}</p>
					</div>
				</div>

				<div id='capture-container'>
					<p>{attack}</p>

					<p>
						Você usou seu ataque e conseguiu atordoar seu oponente,
						não perca tempo, capture-o
					</p>
					<Capture
						isAGroup={situation.group}
						alienName={alien.name}
					/>
				</div>
			</div>
		</main>
	);
}
