import {redirect} from 'next/navigation';
import Form from './form';
import {createHash} from 'crypto';

type EditParams = {
    params:{
        id:number;
    }
}


export default async function Edit({params}:EditParams){
    let spaceship, id, hash;

    try{
        id = (await params).id;
        const res = await fetch(process.env.URL + `/api/spaceship?id=${id}`);
        spaceship = await res.json();

        hash = createHash('sha256').update(JSON.stringify(spaceship)).digest('hex');
    }catch(error){
        console.error(`Failed on spaceship fetch: ${error}`);
        redirect('/spaceships');
    }

    
    return(
        <>
            <h1>Editar a nave #{id}</h1>
            <a href="/spaceships">Listar Naves</a>
            <Form spaceship={spaceship} initialHash={hash}/>
        </>
    );
}

