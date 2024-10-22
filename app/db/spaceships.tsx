import db from "./db";
import { Spaceship } from "../types/spaceship";

export async function insertSpaceship(spaceship:Spaceship) : Promise<number|null>{
    const {color, size, damage, lat, lng, survivors, survivors_description, value, military_power} = spaceship;
    return new Promise((resolve, reject) => {
        db.run(
            `
                INSERT INTO spaceships(
                    size, 
                    color, 
                    damage, 
                    lat, 
                    lng, 
                    survivors, 
                    survivors_description, 
                    value, 
                    military_power)
                VALUES (?,?,?,?,?,?,?,?,?);
            `, [color, size, damage, lat, lng, survivors, survivors_description, value, military_power],
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