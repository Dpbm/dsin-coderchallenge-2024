import { getSpaceship, insertSpaceship } from '@/app/db/spaceships';
import { insertWeapons } from '@/app/db/weapons';
import { updateSpaceship } from '@/app/db/spaceships';
import { Spaceship } from '@/app/types/spaceship';
import { Weapon } from '@/app/types/weapon';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request:NextRequest) {

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

export async function GET(request:NextRequest){
  const id = request.nextUrl.searchParams.get("id");
  if(!id) return NextResponse.json({message:'No Id was provided!'}, {status:404});

  try{
    const data = await getSpaceship(parseInt(id));
    return NextResponse.json(data, {status:200});
  }catch(error){
    console.error(`Failed on get Spaceship: ${error}`);
    return NextResponse.json({message:'Failed on Get Spaceship data! Please, try again later!'}, {status:500});
  }
}


export async function PUT(request:NextRequest){

  try{
    const data = await request.json();

    await updateSpaceship(data);
    // it should be status=204, but for some reason next.js doesn't support it yet
    return NextResponse.json({message:'Spaceship updated successfully!'}, {status:200});
  }catch(error){
    console.error(`failed on update Spaceship Route ${error}`);
    return NextResponse.json({message:'Failed on Update Spaceship data! Please, try again later!'}, {status:500});
  }


}