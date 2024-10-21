'use client';

import { FormEvent } from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { useState } from 'react';

const sizes = {
    small:'Pequeno',
    regular:'Médio',
    big:'Grande',
    giant:'Colossal'
};

const colors = {
    red: 'Vermelho',
    orange: 'Laranja',
    yellow: 'Amarelo',
    green: 'Verde', 
    blue: 'Azul',
    indigo: 'Anil',
    violet: 'Violeta'
};

const damages = {
    completely_damaged: 'Perda Total',
    mostly_damaged: 'Muito Destruído',
    quite_damaged: 'Praticamente Destruído',
    slightly_damaged: 'Praticamente Intacto',
    no_damage: 'Sem Avarias'
};

const defaultPos = {
    lat:-22.2118486,
    lng:-49.9454726
}



export default function Add(){
    const [pos, setPos] = useState(defaultPos);

    function handleDrag(event:google.maps.MapMouseEvent){
        const latLng = event.latLng;
        if(!latLng)return;
        const lat = latLng.lat();
        const lng = latLng.lng();

        setPos({lat, lng});
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        console.log(formData);
        // ...
      }

    return(
        <>
        <h1>Adicione uma Nave</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="size">Tamanho da Nave</label>
                <select name="size" id="size">
                    {Object.entries(sizes).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="color">Cor da Nave</label>
                <select name="color" id="color">
                    {Object.entries(colors).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="damage">Estado da Nave</label>
                <select name="damage" id="damage">
                    {Object.entries(damages).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="location">Localização da Nave</label>
                <APIProvider apiKey={String(process.env.NEXT_PUBLIC_MAPS_API_KEY)}>
                    <Map
                    style={{width: '30vw', height: '500px'}}
                    defaultCenter={pos}
                    defaultZoom={14}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    >
                        <Marker position={pos} draggable onDrag={handleDrag} />
                        <input name="lat" value={pos.lat} style={{display:'none'}} readOnly/>
                        <input name="lng" value={pos.lng} style={{display:'none'}} readOnly/>
                    </Map>
                </APIProvider>
            </div>

            <div>
                <label htmlFor="survivors">Total de Sobreviventes</label>
                <input type="number" name="survivors" id="survivors" min={0} max={200} step={1} defaultValue={0}></input>
            </div>

            <div>
                <label htmlFor="survivors_description">Descrição da situação dos sobreviventes</label>
                <textarea name="survivors_description" id="survivors-description" maxLength={300}></textarea>
            </div>

            <div>
                <label htmlFor="value">Nível de valor agregado a nave</label>
                <input type="number" name="value" id="value" min={0} max={10} step={1} defaultValue={0}></input>
            </div>

            <div>
                <label htmlFor="military_power">Poderio Militar Total da Nave</label>
                <input type="number" name="military_power" id="military-power" min={0} max={10} step={1} defaultValue={0}></input>
            </div>
            
            <button type="submit">Adicionar Nave</button>

            {/**Add weapons */}
        </form>
        </>
    );
}