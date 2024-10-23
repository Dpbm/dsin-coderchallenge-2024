import { SpaceshipPreview } from "../types/spaceship";

export default async function Spaceships(){
    const res = await fetch(process.env.URL+'/api/spaceships');
    const spaceships = await res.json();

    return (
        <>
            <h1>Todas as naves cadastradas: </h1>
            <a href="/spaceships/add">Adicionar Nave</a>
            {spaceships.length > 0 ? <a href="/spaceships/classify">Classificação das naves</a> : <></>}
            {spaceships.map((spaceship:SpaceshipPreview, index:number) => (
                <div key={index}>
                    <p>id: {spaceship.id}</p>
                    <p>nome: {spaceship.name}</p>
                    <p>tamanho: {spaceship.size}</p>
                    <p>cor: {spaceship.color}</p>
                    <a href={`/spaceships/edit/${spaceship.id}`}>Editar Nave</a>
                </div>
            ))}
        </>
    );
}