import { insertSpaceship } from '@/app/db/spaceships';
import { insertWeapons } from '@/app/db/weapons';
import { Spaceship } from '@/app/types/spaceship';
import { Weapon } from '@/app/types/weapon';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(
  request:NextRequest
) {

  const data =  await request.formData();

  const numericFields = ['lat', 'lng', 'survivors', 'value', 'military_power'];
  const parsedData : Spaceship = {};

  let weapons : Weapon[] = [];

  data.forEach((entry:any, name:string) => {
    if(numericFields.includes(name)) parsedData[name] = Number(entry);
    else if(name === 'weapons') weapons = JSON.parse(entry);
    else parsedData[name] = entry;
  });

  let spaceshipId = null;

  try{
    spaceshipId = await insertSpaceship(parsedData);
  }catch(error){
    console.error(`Failed on insert Spaceship route: ${error}`);
    return NextResponse.json({message:"Failed on Insert Spaceship! Please Try again later!"}, {status:500});
  }

  if(!spaceshipId){
    console.error("Spaceship ID returned as NULL");
    return NextResponse.json({message:"Failed on Insert Spaceship! Please Try again later!"}, {status:500});
  }

  try{
    await insertWeapons(weapons, spaceshipId);
  }catch(error){
    console.error(`Failed on insert Weapons (Insert Spaceship route): ${error}`);
    return NextResponse.json({message:"Failed on Insert Weapons! Please Try again later!"}, {status:500});
  }


  return NextResponse.json({message:'spaceship was successfully created!'}, {status:201});
}