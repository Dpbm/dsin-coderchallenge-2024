'use client';

import { ChangeEvent, FormEvent } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { Weapon } from '@/app/types/weapon';
import { redirect } from 'next/navigation';
import { sizes, colors, damages, gases, defaultPos } from '../../constants';
import { ArrowLeft, X } from 'react-feather';
import { validateNumber, validateString } from './validate';

import '../form.styles.css';
import '../formPage.styles.css';

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

export default function Add() {
	const [pos, setPos] = useState(defaultPos);

	const [spaceshipName, setSpaceshipName] = useState('');

	const [militaryPower, setMilitaryPower] = useState(0);

	const [weaponName, setWeaponName] = useState('');
	const [weaponPower, setWeaponPower] = useState(1);
	const [weapons, setWeapons] = useState([] as Weapon[]);

	const [sendingData, setSendingData] = useState(false);

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

	function handleDrag(event: google.maps.MapMouseEvent) {
		const latLng = event.latLng;
		if (!latLng) return;
		const lat = latLng.lat();
		const lng = latLng.lng();

		setPos({ lat, lng });
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const name = String(formData.get('name'));
		const danger = String(formData.get('danger'));
		const survivors = String(formData.get('survivors'));
		const value = String(formData.get('value'));
		const military_power = String(formData.get('military_power'));

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

		if (!validateNumber(danger, 0, 10)) {
			setFormErrors({ ...formErrors, danger: true });
			hasErrors = true;
		}

		if (!validateNumber(survivors, 0, 200)) {
			setFormErrors({ ...formErrors, survivors: true });
			hasErrors = true;
		}

		if (!validateNumber(value, 0, 10)) {
			setFormErrors({ ...formErrors, value: true });
			hasErrors = true;
		}

		if (!validateNumber(military_power, 0, 10)) {
			setFormErrors({ ...formErrors, military_power: true });
			hasErrors = true;
		}

		if (hasErrors) return;

		formData.append('weapons', JSON.stringify(weapons));
		setSendingData(true);

		const res = await fetch('/api/spaceship', {
			method: 'POST',
			body: formData,
		});

		setSendingData(false);

		if (!res.ok) alert((await res.json())['message']);
		else redirect('/spaceships');
	}

	function handleMilitaryPower(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const power = parseInt(event.target.value);
		setMilitaryPower(power);

		if (power <= 0) {
			setWeapons([]);
			setWeaponName('');
			setWeaponPower(1);
		}
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
		setWeapons([...weapons, { name: weaponName, power: weaponPower }]);
	}

	function handleRemoveWeapon(index: number) {
		const newWeapons = [...weapons];
		newWeapons.splice(index, 1);
		setWeapons([...newWeapons]);
	}

	function handleSpaceshipName(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		setSpaceshipName(event.target.value);
	}

	const disabledSubmit =
		sendingData ||
		spaceshipName.length <= 0 ||
		Object.values(formErrors).some(Boolean);
	const disabledAddWeapon = Object.values(weaponErrors).some(Boolean);

	return (
		<main>
			<header>
				<ArrowLeft size={40} onClick={() => redirect('/spaceships')} />
			</header>

			<div id='forms-container'>
				<h1 id='forms-title'>Adicione uma Nave</h1>
				<form onSubmit={handleSubmit}>
					<div className='data-area-container'>
						<label htmlFor='name'>Nome da Nave*</label>
						<input
							name='name'
							id='name'
							type='text'
							maxLength={30}
							defaultValue={spaceshipName}
							onChange={handleSpaceshipName}
						></input>
						{formErrors.name ? (
							<span className='form-error'>Nome Inválido</span>
						) : (
							<></>
						)}
					</div>

					<div className='data-area-container'>
						<label htmlFor='size'>Tamanho da Nave*</label>
						<select name='size' id='size'>
							{Object.entries(sizes).map(([k, v], index) => (
								<option key={index} defaultValue={k}>
									{v}
								</option>
							))}
						</select>
					</div>

					<div className='data-area-container'>
						<label htmlFor='color'>Cor da Nave*</label>
						<select name='color' id='color'>
							{Object.entries(colors).map(([k, v], index) => (
								<option key={index} defaultValue={k}>
									{v}
								</option>
							))}
						</select>
					</div>

					<div className='data-area-container'>
						<label htmlFor='damage'>Estado da Nave*</label>
						<select name='damage' id='damage'>
							{Object.entries(damages).map(([k, v], index) => (
								<option key={index} defaultValue={k}>
									{v}
								</option>
							))}
						</select>
					</div>

					<div className='data-area-container'>
						<label htmlFor='gas'>Combustível*</label>
						<select name='gas' id='gas'>
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
							apiKey={String(
								process.env.NEXT_PUBLIC_MAPS_API_KEY
							)}
						>
							<Map
								style={{
									width: '30vw',
									height: '500px',
								}}
								defaultCenter={pos}
								defaultZoom={14}
								gestureHandling={'greedy'}
								disableDefaultUI={true}
							>
								<Marker
									position={pos}
									draggable
									onDrag={handleDrag}
								/>
								<input
									name='lat'
									value={pos.lat}
									style={{ display: 'none' }}
									readOnly
								/>
								<input
									name='lng'
									value={pos.lng}
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
							defaultValue={0}
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
						<label htmlFor='survivors'>
							Total de Sobreviventes*
						</label>
						<input
							type='number'
							name='survivors'
							id='survivors'
							min={0}
							max={200}
							step={1}
							defaultValue={0}
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
						></textarea>
					</div>

					<div className='data-area-container'>
						<label htmlFor='value'>
							Nível de Valor Agregado a Nave*
						</label>
						<input
							type='number'
							name='value'
							id='value'
							min={0}
							max={10}
							step={1}
							defaultValue={0}
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
							defaultValue={0}
							onChange={handleMilitaryPower}
						></input>
						{formErrors.military_power ? (
							<span className='form-error'>
								Poderio militar inválido
							</span>
						) : (
							<></>
						)}
					</div>

					{militaryPower > 0 ? (
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
								{weapons.map((weapon, index) => (
									<div key={index} className='added-weapon'>
										<p>
											{weapon.name} - {weapon.power}
										</p>
										<X
											size={20}
											onClick={() =>
												handleRemoveWeapon(index)
											}
										/>
									</div>
								))}
							</div>
						</div>
					) : (
						<></>
					)}

					<button
						type='submit'
						className={`button-${
							disabledSubmit ? 'disabled' : 'enabled'
						}`}
						disabled={disabledSubmit}
					>
						{sendingData ? 'Enviando Dados...' : 'Adicionar Nave'}
					</button>
				</form>
			</div>
		</main>
	);
}
