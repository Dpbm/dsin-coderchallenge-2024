import './noSpaceships.styles.css';

export default function NoSpaceships() {
	return (
		<div id='no-spaceships'>
			<h1>Nenhuma nave cadastrada</h1>
			<a href='/spaceships/add' id='add-spaceship'>
				Cadastrar
			</a>
		</div>
	);
}
