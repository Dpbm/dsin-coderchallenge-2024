import db from "./db";
import { Weapon } from "../types/weapon";


export async function insertWeapons(weapons:Weapon[], spaceshipId:number) : Promise<unknown> {

    const placeholder = weapons.map(() => '(?,?,?)').join(',');

    if(weapons.length <= 0) return;

    return new Promise((resolve, reject) => {
            db.run(
            `
                INSERT INTO weapons(
                    spaceship_id,
                    name,
                    power
                )
                VALUES ${placeholder};
            `, weapons.map(({name, power}) => [spaceshipId, name, power]).flat(Infinity),
            function(error:Error|null){
                if(!error){
                    resolve(0);
                    return;
                };
                console.error(`Failed on Insert weapons: ${error}`);
                reject(1);
            }
        );   
    });

}

export async function deleteWeapons(spaceshipId:number):Promise<unknown>{
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM weapons WHERE spaceship_id=?`, 
            [spaceshipId], 
            function(error:Error|null){
                if(error){
                    console.error(`Failed on Delete Weapons: ${error}`);
                    reject(error);
                    return;
                }
                resolve(0);
            }
        );
    });   
};