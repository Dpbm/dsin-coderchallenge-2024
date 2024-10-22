import db from "./db";
import { SpaceshipPreview, Spaceship, FullSpaceship, SpaceshipRow } from "../types/spaceship";
import {WeaponRow} from '../types/weapon';

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
                reject(error);
            }
            
        );
    });
}

export async function getSpaceshipsPreview():Promise<SpaceshipPreview[]>{
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT id, name, color, size FROM spaceships ORDER BY id DESC;`, [],
            function(error:Error|null, rows:SpaceshipPreview[]){
                if(!error){
                    resolve(rows || []);
                    return;
                }
                
                console.error(`Failed on Get Spaceships: ${error}`);
                reject(error);
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
                reject(error);
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
                reject(error);
            }
        );
    });

    const data : FullSpaceship = {...spaceship, weapons:weapons};

    return data;
}

export async function updateSpaceship(data:SpaceshipRow) : Promise<unknown>{
    const {name, color, damage, gas, id, lat, lng, military_power, size, survivors, survivors_description, value} = data;

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
                resolve(0);
            }
        );
    });
}

export async function deleteSpaceship(id:number):Promise<unknown>{
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM spaceships WHERE id=?`, [id],
            function(error:Error|null){
                if(!error){
                    resolve(0);
                    return;
                }
                
                console.error(`Failed on Delete Spaceship: ${error}`);
                reject(error);
            }
            
        );
    });
}