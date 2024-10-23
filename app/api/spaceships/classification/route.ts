import { getSpaceshipsForClassification } from '@/app/db/spaceships';
import { NextResponse } from 'next/server';


export async function GET(){
    try{
        const spaceships = await getSpaceshipsForClassification();
        return NextResponse.json(spaceships, {status:200});
    }catch(error){
        console.error(`Failed on Get Spaceships For Classification route: ${error}`);
        return NextResponse.json([], {status:200});
    }
}