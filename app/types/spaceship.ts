import { WeaponRow } from "./weapon";

export type Spaceship = {
    name:string;
    size: string;
    color:string;
    damage: string;
    gas: string;
    lat:number;
    lng:number;
    danger:number;
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
    danger:number;
    survivors:number;
    survivors_description:string;
    value:number;
    military_power:number;
    classification:string;
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
    danger:number;
    survivors:number;
    survivors_description:string;
    value:number;
    military_power:number;
    classification:string;
    weapons: WeaponRow[];
};

export type SpaceshipPreview = {
    id:number;
    name:string;
    color:string;
    size: string;
}

export type SpaceshipClassification = {
    id:number;
    name:string;
    size: string;
    damage: string;
    gas: string;
    danger:number;
    value:number;
    military_power:number;
    classification:string;
}