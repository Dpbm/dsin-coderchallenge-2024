import db from "./db";
import { Weapon } from "../types/weapon";


export async function insertWeapons(weapons:Weapon[], spaceshipId:number) {

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
