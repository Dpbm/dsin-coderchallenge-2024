import { WeaponRow } from "./weapon";

export type Spaceship = {
    name:string;
    size: string;
    color:string;
    damage: string;
    gas: string;
    lat:number;
    lng:number;
    survivors:number;
    survivors_description:string;
    value:number;
    military_power:number;
};

export type SpaceshipRow = {
    id:number;
    name:string;
    size: string;
    color:string;
    damage: string;
    gas: string;
    lat:number;
    lng:number;
    survivors:number;
    survivors_description:string;
    value:number;
    military_power:number;
};

export type FullSpaceship = {
    id:number;
    name:string;
    size: string;
    color:string;
    damage: string;
    gas: string;
    lat:number;
    lng:number;
    survivors:number;
    survivors_description:string;
    value:number;
    military_power:number;
    weapons: WeaponRow[];
};

export type SpaceshipPreview = {
    id:number;
    name:string;
    color:string;
    size: string;
}