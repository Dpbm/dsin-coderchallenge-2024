import db from "./db";
import { SpaceshipPreview, Spaceship, FullSpaceship, SpaceshipRow } from "../types/spaceship";
import {WeaponRow} from '../types/weapon';
import { deleteWeapons, insertWeapons } from "./weapons";

export async function insertSpaceship(spaceship:Spaceship) : Promise<number|null>{
    const {name, color, size, damage, gas, lat, lng, survivors, survivors_description, value, military_power} = spaceship;
    return new Promise((resolve, reject) => {
        db.run(
            `
                INSERT INTO spaceships(
                    name,
                    size, 
                    color, 
                    damage, 
                    gas,
                    lat, 
                    lng, 
                    survivors, 
                    survivors_description, 
                    value, 
                    military_power)
                VALUES (?,?,?,?,?,?,?,?,?,?,?);
            `, [name, size, color, damage, gas, lat, lng, survivors, survivors_description, value, military_power],
            function(error:Error|null){
                if(!error){
                    resolve(this.lastID);
                    return;
                }
                
                console.error(`Failed on Insert Spaceship: ${error}`);
                reject("Failed on Insert Spaceship");
            }
            
        );
    });
}

export async function getSpaceshipsPreview():Promise<SpaceshipPreview[]>{
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT id, name, color, size FROM spaceships;`, [],
            function(error:Error|null, rows:SpaceshipPreview[]){
                if(!error){
                    resolve(rows || []);
                    return;
                }
                
                console.error(`Failed on Get Spaceships: ${error}`);
                reject("Failed on Get Spaceships");
            }
            
        );
    });
}

export async function getSpaceship(id:number):Promise<FullSpaceship>{
    const spaceship : SpaceshipRow = await new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM spaceships WHERE id = ?;`, [id],
            function(error:Error|null, row:SpaceshipRow){
                if(!error){
                    resolve(row || null);
                    return;
                }
                
                console.error(`Failed on Get Spaceship: ${error}`);
                reject("Failed on Get Spaceship");
            }
            
        );
    });

    const weapons : WeaponRow[] = await new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM weapons WHERE spaceship_id = ?;`, [id],
            function(error:Error|null, rows:WeaponRow[]){
                if(!error){
                    resolve(rows || []);
                    return;
                }
                
                console.error(`Failed on Get Spaceship Weapons: ${error}`);
                reject("Failed on Get Spaceship Weapons");
            }
        );
    });

    const data : FullSpaceship = {...spaceship, weapons:weapons};

    return data;
}

export async function updateSpaceship(data:FullSpaceship) : Promise<unknown>{
    const {name, color, damage, gas, id, lat, lng, military_power, size, survivors, survivors_description, value, weapons} = data;

    return new Promise(async (resolve, reject) => {
        db.run(
            `
                UPDATE spaceships
                SET name=?, color=?, damage=?, gas=?, lat=?, lng=?, military_power=?, size=?, survivors=?, survivors_description=?, value=?
                WHERE id=?
            `, [name, color, damage, gas, lat, lng, military_power, size, survivors, survivors_description, value, id],
            function(error:Error|null){
                if(error){
                    console.error(`Failed on Update Spaceship: ${error}`);
                    reject(error);
                    return;
                }
            }
        );

        try{
            await deleteWeapons(id);
        }catch(error){
            console.error(`Failed Delete Weapons For Spaceship Edit: ${error}`);
            reject(error);
        }
        const parsedWeapons = weapons.map((weapon:WeaponRow) => ({name:weapon.name, power:weapon.power}));

        try{
            await insertWeapons(parsedWeapons, id);
        }catch(error){
            console.error(`Failed Insert Weapons For Spaceship Edit: ${error}`);
            reject(error);
        }
        
        resolve(0);
    });
}