export type Spaceship = {
    name:string;
    size: string;
    color:string;
    damage: string;
    lat:number;
    lng:number;
    survivors:number;
    survivors_description:string;
    value:number;
    military_power:number;
};

export type SpaceshipPreview = {
    id:number;
    name:string;
    color:string;
    size: string;
}