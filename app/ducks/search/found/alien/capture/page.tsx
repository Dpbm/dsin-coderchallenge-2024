import Image from "next/image";
import { getAlien, getSituation } from "./aliens";
import Capture from "./capture";

export default function Attack(){

    const alien = getAlien();
    const situation = getSituation();

    const attack = alien.attacks[ situation.group ? 'group' : 'alone' ][situation.distant ? 'distant' : 'close'];

   

    return (
        <>
            <p>{situation.story}</p>
            <p>Você encontrou o {alien.name}!!!!</p>
            <Image src={alien.image} alt="Imagem do alien" width={300} height={300}></Image>
            <p>Poder: {alien.power}+</p>
            <p>{attack}</p>
            <p>{alien.story}</p>
            
            <p>Você usou seu ataque e conseguiu atordoar seu oponente, não perca tempo, capture-o</p>
            <Capture isAGroup={situation.group} alienName={alien.name} />
        </>
    );
}