import {
	deleteSpaceship,
	getSpaceship,
	insertSpaceship,
} from '@/app/db/spaceships';
import { deleteWeapons, getWeapons, insertWeapons } from '@/app/db/weapons';
import { updateSpaceship } from '@/app/db/spaceships';
import { Spaceship } from '@/app/types/spaceship';
import { Weapon, WeaponRow } from '@/app/types/weapon';
import { NextRequest, NextResponse } from 'next/server';

type parsedData = {
	[key: string]: number | string;
};

export async function POST(request: NextRequest) {
	const data = await request.formData();

	const numericFields = [
		'lat',
		'lng',
		'survivors',
		'value',
		'military_power',
		'danger',
	];
	const parsedData: parsedData = {};

	let weapons: Weapon[] = [];

	data.forEach((entry: FormDataEntryValue, name: string) => {
		if (numericFields.includes(name)) parsedData[name] = Number(entry);
		else if (name === 'weapons') weapons = JSON.parse(String(entry));
		else parsedData[name] = String(entry);
	});

	let spaceshipId = null;

	try {
		spaceshipId = await insertSpaceship(parsedData as Spaceship);
	} catch (error) {
		console.error(`Failed on insert Spaceship route: ${error}`);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar adicionar a Nave! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}

	if (!spaceshipId) {
		console.error('Spaceship ID returned as NULL');
		return NextResponse.json(
			{
				message:
					'Falha ao tentar adicionar a Nave! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}

	try {
		await insertWeapons(weapons, spaceshipId);
	} catch (error) {
		console.error(
			`Failed on insert Weapons (Insert Spaceship route): ${error}`
		);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar adicionar as armas! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}

	return NextResponse.json(
		{ message: 'Nave criada com sucesso!' },
		{ status: 201 }
	);
}

export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get('id');
	if (!id)
		return NextResponse.json(
			{ message: 'Nenhum ID foi passado!' },
			{ status: 404 }
		);

	let spaceship, weapons;

	try {
		spaceship = await getSpaceship(parseInt(id));
	} catch (error) {
		console.error(`Failed on get Spaceship: ${error}`);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar pegar os dados das naves! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}

	try {
		weapons = await getWeapons(parseInt(id));
	} catch (error) {
		console.error(`Failed on get Weapons: ${error}`);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar pegar os dados das armas da nave! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}

	return NextResponse.json({ ...spaceship, weapons }, { status: 200 });
}

export async function PUT(request: NextRequest) {
	const data = await request.json();

	try {
		await deleteWeapons(data.id);
	} catch (error) {
		console.error(`Failed Delete Weapons For Spaceship Edit: ${error}`);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar deletar os armamentos da nave! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}
	const parsedWeapons = data.weapons.map((weapon: WeaponRow) => ({
		name: weapon.name,
		power: weapon.power,
	}));

	try {
		await insertWeapons(parsedWeapons, data.id);
	} catch (error) {
		console.error(`Failed Insert Weapons For Spaceship Edit: ${error}`);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar adicionar os novos armamentos da nave! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}

	try {
		await updateSpaceship(data);
		return NextResponse.json(
			{ message: 'Nave Atualizada com sucesso!' },
			{ status: 200 }
		);
	} catch (error) {
		console.error(`failed on update Spaceship Route ${error}`);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar atualizar os dados da nave! Por favor tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}
}

export async function DELETE(request: NextRequest) {
	const id = request.nextUrl.searchParams.get('id');
	if (!id)
		return NextResponse.json(
			{ message: 'Nenhum ID foi passado!' },
			{ status: 404 }
		);

	try {
		await deleteWeapons(parseInt(id));
	} catch (error) {
		console.error(
			`failed on Delete Weapons (Delete Spaceship Route) ${error}`
		);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar deletar as armas da nave! Por favor, tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}

	try {
		await deleteSpaceship(parseInt(id));
		return NextResponse.json(
			{ message: 'Nave deletada com sucesso' },
			{ status: 200 }
		);
	} catch (error) {
		console.error(`failed on Delete Spaceship Route ${error}`);
		return NextResponse.json(
			{
				message:
					'Falha ao tentar deletar os dados da nave! Por favor, tente novamente mais tarde!',
			},
			{ status: 500 }
		);
	}
}
