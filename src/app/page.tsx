import './style.css';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<div id="barra_navegacao" className="container">
				<img src="" alt="Filmaker" />
				<form action="">
					<input type="text" placeholder="Pesquisar Albuns" />
					<button type="submit">Pesquisar</button>
				</form>
				<nav>
					<a href="/sobre" className="link_espaco">
						Sobre
					</a>
					<a href="#" className="link_espaco">
						Cadastro
					</a>
					<a href="#" className="link_espaco">
						Login
					</a>
				</nav>
			</div>

			<h1>React Teste</h1>
			<h2>Funcionando</h2>
			<a href="/sobre">Sobre</a>
		</div>
	);
}
