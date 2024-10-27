'use client';
import { FullSpaceship } from '@/app/types/spaceship';
import { sizes, colors, damages, gases } from '../../../constants';
import { ChangeEvent, useState, FormEvent } from 'react';
import { createHash } from 'crypto';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { redirect } from 'next/navigation';
import { validateString, validateNumber } from '../../add/validate';
import { X } from 'react-feather';

import '../../form.styles.css';

type FormProps = {
	spaceship: FullSpaceship;
	initialHash: string;
};

type FormErros = {
	name: boolean | null;
	danger: boolean | null;
	survivors: boolean | null;
	value: boolean | null;
	military_power: boolean | null;
};

type WeaponsErrors = {
	name: boolean | null;
	power: boolean | null;
};

export default function Form({ spaceship, initialHash }: FormProps) {
	const [data, setData] = useState(spaceship);

	const [weaponName, setWeaponName] = useState('');
	const [weaponPower, setWeaponPower] = useState(1);

	const [sendingData, setSendingData] = useState(false);
	const [deletingData, setDeletingData] = useState(false);

	const [formErrors, setFormErrors] = useState({
		name: null,
		danger: null,
		survivors: null,
		value: null,
		military_power: null,
	} as FormErros);
	const [weaponErrors, setWeaponErrors] = useState({
		name: null,
		power: false,
	} as WeaponsErrors);

	function handleChange(
		event: ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) {
		event.preventDefault();

		let newValue: number | string = event.target.value;
		if (!isNaN(Number(newValue))) newValue = Number(newValue);

		setData({ ...data, [event.target.name]: newValue });
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const { name, danger, survivors, value, military_power } = data;

		setFormErrors({
			name: false,
			danger: false,
			survivors: false,
			value: false,
			military_power: false,
		});
		let hasErrors = false;

		if (!validateString(name, 1, 30)) {
			setFormErrors({ ...formErrors, name: true });
			hasErrors = true;
		}

		if (!validateNumber(String(danger), 0, 10)) {
			setFormErrors({ ...formErrors, danger: true });
			hasErrors = true;
		}

		if (!validateNumber(String(survivors), 0, 200)) {
			setFormErrors({ ...formErrors, survivors: true });
			hasErrors = true;
		}

		if (!validateNumber(String(value), 0, 10)) {
			setFormErrors({ ...formErrors, value: true });
			hasErrors = true;
		}

		if (!validateNumber(String(military_power), 0, 10)) {
			setFormErrors({ ...formErrors, military_power: true });
			hasErrors = true;
		}

		if (hasErrors) return;

		setSendingData(true);

		const res = await fetch('/api/spaceship', {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		setSendingData(false);

		if (!res.ok) alert((await res.json())['message']);
		else {
			alert('Dados Atualizados Com Sucesso!');
			window.location.reload();
		}
	}

	async function handleDeleteSpaceship() {
		if (!confirm('Você realmente quer deletar essa nave?')) return;

		setDeletingData(true);

		const res = await fetch(`/api/spaceship?id=${data.id}`, {
			method: 'DELETE',
		});

		setDeletingData(false);

		if (!res.ok) alert((await res.json())['message']);
		else {
			alert('Dados Deletados Com Sucesso!');
			redirect('/spaceships');
		}
	}

	function handleDrag(event: google.maps.MapMouseEvent) {
		const latLng = event.latLng;
		if (!latLng) return;
		const lat = latLng.lat();
		const lng = latLng.lng();

		setData({ ...data, lat, lng });
	}

	function handleWeaponName(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();

		const inputName = event.target.value;

		setWeaponErrors({
			...weaponErrors,
			name: !validateString(inputName, 1, 30),
		});

		setWeaponName(inputName);
	}

	function handleWeaponPower(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();

		const inputPower = event.target.value;

		setWeaponErrors({
			...weaponErrors,
			power: !validateNumber(inputPower, 1, 10),
		});

		setWeaponPower(parseInt(inputPower));
	}

	function handleNewWeapon() {
		// remember to parse this empty ID
		setData({
			...data,
			weapons: [
				...data.weapons,
				{
					id: NaN,
					spaceship_id: data.id,
					name: weaponName,
					power: weaponPower,
				},
			],
		});
	}

	function handleRemoveWeapon(index: number) {
		const newWeapons = [...data.weapons];
		newWeapons.splice(index, 1);
		setData({ ...data, weapons: [...newWeapons] });
	}

	const dataHash = createHash('sha256')
		.update(JSON.stringify(data))
		.digest('hex');
	const disabledSubmit =
		sendingData ||
		initialHash == dataHash ||
		Object.values(formErrors).some(Boolean);
	const disabledAddWeapon = Object.values(weaponErrors).some(Boolean);

	return (
		<form onSubmit={handleSubmit}>
			<div className='data-area-container'>
				<label htmlFor='name'>Nome da Nave*</label>
				<input
					name='name'
					id='name'
					type='text'
					maxLength={30}
					defaultValue={data.name}
					onChange={handleChange}
				></input>
				{formErrors.name ? (
					<span className='form-error'>Nome Inválido</span>
				) : (
					<></>
				)}
			</div>

			<div className='data-area-container'>
				<label htmlFor='size'>Tamanho da Nave*</label>
				<select
					name='size'
					id='size'
					defaultValue={data.size}
					onChange={handleChange}
				>
					{Object.entries(sizes).map(([k, v], index) => (
						<option key={index} defaultValue={k}>
							{v}
						</option>
					))}
				</select>
			</div>

			<div className='data-area-container'>
				<label htmlFor='color'>Cor da Nave*</label>
				<select
					name='color'
					id='color'
					defaultValue={data.color}
					onChange={handleChange}
				>
					{Object.entries(colors).map(([k, v], index) => (
						<option key={index} defaultValue={k}>
							{v}
						</option>
					))}
				</select>
			</div>

			<div className='data-area-container'>
				<label htmlFor='damage'>Estado da Nave*</label>
				<select
					name='damage'
					id='damage'
					defaultValue={data.damage}
					onChange={handleChange}
				>
					{Object.entries(damages).map(([k, v], index) => (
						<option key={index} defaultValue={k}>
							{v}
						</option>
					))}
				</select>
			</div>

			<div className='data-area-container'>
				<label htmlFor='gas'>Combustível*</label>
				<select
					name='gas'
					id='gas'
					defaultValue={data.gas}
					onChange={handleChange}
				>
					{Object.entries(gases).map(([k, v], index) => (
						<option key={index} defaultValue={k}>
							{v}
						</option>
					))}
				</select>
			</div>

			<div className='data-area-container'>
				<label htmlFor='location'>Localização da Nave*</label>
				<APIProvider
					apiKey={String(process.env.NEXT_PUBLIC_MAPS_API_KEY)}
				>
					<Map
						style={{
							width: '30vw',
							height: '500px',
						}}
						defaultCenter={{ lat: data.lat, lng: data.lng }}
						defaultZoom={14}
						gestureHandling={'greedy'}
						disableDefaultUI={true}
					>
						<Marker
							position={{ lat: data.lat, lng: data.lng }}
							draggable
							onDrag={handleDrag}
						/>
						<input
							name='lat'
							value={data.lat}
							style={{ display: 'none' }}
							readOnly
						/>
						<input
							name='lng'
							value={data.lng}
							style={{ display: 'none' }}
							readOnly
						/>
					</Map>
				</APIProvider>
			</div>

			<div className='data-area-container'>
				<label htmlFor='danger'>Grau de Periculosidade*</label>
				<input
					type='number'
					name='danger'
					id='danger'
					min={0}
					max={10}
					step={1}
					defaultValue={data.danger}
					onChange={handleChange}
				></input>
				{formErrors.danger ? (
					<span className='form-error'>
						Valor de Periculosidade inválido
					</span>
				) : (
					<></>
				)}
			</div>

			<div className='data-area-container'>
				<label htmlFor='survivors'>Total de Sobreviventes*</label>
				<input
					type='number'
					name='survivors'
					id='survivors'
					min={0}
					max={200}
					step={1}
					defaultValue={data.survivors}
					onChange={handleChange}
				></input>
				{formErrors.survivors ? (
					<span className='form-error'>
						Número de sobreviventes inválido
					</span>
				) : (
					<></>
				)}
			</div>

			<div className='data-area-container'>
				<label htmlFor='survivors_description'>
					Situação dos Sobreviventes
				</label>
				<textarea
					name='survivors_description'
					id='survivors-description'
					maxLength={400}
					defaultValue={data.survivors_description}
					onChange={handleChange}
				></textarea>
			</div>

			<div className='data-area-container'>
				<label htmlFor='value'>Nível de Valor Agregado a Nave*</label>
				<input
					type='number'
					name='value'
					id='value'
					min={0}
					max={10}
					step={1}
					defaultValue={data.value}
					onChange={handleChange}
				></input>
				{formErrors.value ? (
					<span className='form-error'>Valor inválido</span>
				) : (
					<></>
				)}
			</div>

			<div className='data-area-container'>
				<label htmlFor='military_power'>
					Poderio Militar Total da Nave*
				</label>
				<input
					type='number'
					name='military_power'
					id='military-power'
					min={0}
					max={10}
					step={1}
					defaultValue={data.military_power}
					onChange={handleChange}
				></input>
				{formErrors.military_power ? (
					<span className='form-error'>Poderio militar inválido</span>
				) : (
					<></>
				)}
			</div>

			{data.military_power > 0 ? (
				<div id='military-power-container'>
					<h2>Adicionar Armamentos</h2>

					<div className='data-area-container'>
						<label>Nome do armamento*</label>
						<input
							id='weapon'
							type='text'
							minLength={1}
							maxLength={30}
							defaultValue={weaponName}
							onChange={handleWeaponName}
						></input>
						{weaponErrors.name ? (
							<span className='form-error'>
								Nome do armamento Inválido
							</span>
						) : (
							<></>
						)}
					</div>

					<div className='data-area-container'>
						<label>Poder do armamento*</label>
						<input
							type='number'
							id='weapon-power'
							min={1}
							max={10}
							step={1}
							defaultValue={weaponPower}
							onChange={handleWeaponPower}
						></input>
						{weaponErrors.power ? (
							<span className='form-error'>
								Poder do armamento Inválido
							</span>
						) : (
							<></>
						)}
					</div>

					<button
						type='button'
						className={`button-${
							disabledAddWeapon ? 'disabled' : 'enabled'
						}`}
						onClick={handleNewWeapon}
						disabled={disabledAddWeapon}
					>
						Adicionar
					</button>

					<div id='weapons-container'>
						<h3>Armamentos Adicionados</h3>
						{data.weapons.map((weapon, index) => (
							<div key={index} className='added-weapon'>
								<p>
									{weapon.name} - {weapon.power}
								</p>
								<X
									size={20}
									onClick={() => handleRemoveWeapon(index)}
								/>
							</div>
						))}
					</div>
				</div>
			) : (
				<></>
			)}

			<div id='buttons-container'>
				<button
					type='submit'
					className={`button-${
						disabledSubmit ? 'disabled' : 'enabled'
					}`}
					disabled={disabledSubmit}
				>
					{sendingData ? 'Atualizando Dados...' : 'Atualizar Nave'}
				</button>
				<button
					type='button'
					onClick={handleDeleteSpaceship}
					className='button-enabled'
					disabled={deletingData}
				>
					{deletingData ? 'Deletando Dados...' : 'Deletar Nave'}
				</button>
			</div>
		</form>
	);
}
