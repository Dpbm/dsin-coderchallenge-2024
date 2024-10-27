import { Spaceship, SpaceshipRow } from '@/app/types/spaceship';
import * as tf from '@tensorflow/tfjs';

type Encoding = {
	[key: string]: number;
};

export function classify(
	spaceship: Spaceship | SpaceshipRow,
	model: tf.LayersModel
): string {
	const damage_enc = encodeDamage(spaceship.damage) / 5;
	const size_enc = encodeSize(spaceship.size) / 4;
	const gas_enc = encodeGas(spaceship.gas) / 5;
	const danger_enc = spaceship.danger / 10;
	const value_enc = spaceship.value / 10;
	const power_enc = spaceship.military_power / 10;
	const input = [
		value_enc,
		power_enc,
		damage_enc,
		size_enc,
		danger_enc,
		gas_enc,
	];
	const prediction = model.predict(
		tf.tensor(input).reshape([-1, 6])
	) as tf.Tensor;
	const values = [...prediction.dataSync()];
	return decodePrediction(values);
}

export function disposeModel(model: tf.LayersModel) {
	model.layers.forEach((l) => l.dispose());
}

function encodeDamage(damage: string): number {
	const encoding: Encoding = {
		'Perda Total': 0,
		'Muito Destruído': 1,
		'Praticamente Destruído': 2,
		'Praticamente Intacto': 3,
		'Sem Avarias': 4,
	};
	return encoding[damage];
}

function encodeSize(size: string): number {
	const encoding: Encoding = {
		Pequeno: 0,
		Médio: 1,
		Grande: 2,
		Colossal: 3,
	};
	return encoding[size];
}

function encodeGas(gas: string): number {
	const encoding: Encoding = {
		Milho: 1,
		Vaca: 1,
		Humanos: 1,
		'Poeira Cósmica': 4,
		'Buraco Negro': 4,
		Hamster: 2,
		Raios: 4,
		Planetas: 4,
		Supernova: 4,
		Água: 3,
		Hidrogênio: 3,
		Irídio: 5,
	};

	return encoding[gas];
}

function decodePrediction(prediction: number[]): string {
	const labels = [
		'Sucata Espacial',
		'Joia Tecnológica',
		'Arsenal Alienígena',
		'Ameaça em Potencial',
		'Fonte de Energia Alternativa',
	];
	const predictedLabel = prediction.indexOf(Math.max(...prediction));

	return labels[predictedLabel];
}
