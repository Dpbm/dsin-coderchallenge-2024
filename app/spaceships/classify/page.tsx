import { SpaceshipClassification } from "@/app/types/spaceship";

export default async function Classification(){
    const res = await fetch(process.env.URL+'/api/spaceships/classification');
    const spaceships = await res.json();

    return (
        <>
            <a href="/spaceships">Lista de Naves</a>

            <span>*A classificação das Naves é dada partir da análise do: tamanho, estado, tipo de combustível, grau de periculosidade, valor estimado e poderio militar; Feito pela nossa inteligencia artificial super avançada <strong><i>JOHN</i></strong></span>

            {spaceships.map((spaceship:SpaceshipClassification, index:number) => {
                return <div key={index}>
                    <p>nome: {spaceship.name}</p>
                    <p>tamanho: {spaceship.size}</p>
                    <p>estado: {spaceship.damage}</p>
                    <p>combustível: {spaceship.gas}</p>
                    <p>periculosidade: {spaceship.danger}</p>
                    <p>valor: {spaceship.value}</p>
                    <p>poder militar: {spaceship.military_power}</p>
                    <p>classificação: {spaceship.classification}</p>
                </div>
            })}
        
        </>
    );

}