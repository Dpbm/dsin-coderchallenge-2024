import './page.styles.css';

export default function Home() {
	return (
		<main>
			<header>
				<h1>Bem-vindo ao SIG(Sistema integrador galáctico)!</h1>
				<h2>Escolha a ação que deseja executar:</h2>
			</header>
			<nav id='actions'>
				<a href='/spaceships'>Listar naves</a>
				<a href='/spaceships/add'>Adicionar Nave</a>
				<a href='/spaceships/classify'>Classificar Naves</a>
				<a href='/ducks'>Patos</a>
			</nav>
		</main>
	);
}
