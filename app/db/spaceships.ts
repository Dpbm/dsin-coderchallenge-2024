import db from "./db";
import { SpaceshipPreview, Spaceship } from "../types/spaceship";

export async function insertSpaceship(spaceship:Spaceship) : Promise<number|null>{
    const {name, color, size, damage, lat, lng, survivors, survivors_description, value, military_power} = spaceship;
    return new Promise((resolve, reject) => {
        db.run(
            `
                INSERT INTO spaceships(
                    name,
                    size, 
                    color, 
                    damage, 
                    lat, 
                    lng, 
                    survivors, 
                    survivors_description, 
                    value, 
                    military_power)
                VALUES (?,?,?,?,?,?,?,?,?,?);
            `, [name, size, color, damage, lat, lng, survivors, survivors_description, value, military_power],
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