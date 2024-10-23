'use client';

import { ChangeEvent, FormEvent } from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { Weapon } from '@/app/types/weapon';
import { redirect } from 'next/navigation';
import {sizes, colors, damages, gases, defaultPos } from '../../constants';

export default function Add(){
    const [pos, setPos] = useState(defaultPos);

    const [spaceshipName, setSpaceshipName] = useState('');

    const [militaryPower, setMilitaryPower] = useState(0);

    const [weaponName, setWeaponName] = useState('');
    const [weaponPower, setWeaponPower] = useState(1);
    const [weapons, setWeapons] = useState([] as Weapon[]);

    const [sendingData, setSendingData] = useState(false);

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
        formData.append('weapons', JSON.stringify(weapons));
        setSendingData(true);


        const res = await fetch('/api/spaceship',{
            method: 'POST',
            body: formData,
          });

        setSendingData(false);

        if(!res.ok)
            alert((await res.json())['message']);
        else
            redirect('/spaceships');
    }

    function handleMilitaryPower(event:ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        const power = parseInt(event.target.value);
        setMilitaryPower(power);

        if(power <= 0){
            setWeapons([]);
            setWeaponName('');
            setWeaponPower(1);
        }
    }

    function handleWeaponName(event:ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        setWeaponName(event.target.value);
    }

    function handleWeaponPower(event:ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        setWeaponPower(parseInt(event.target.value));
    }

    function handleNewWeapon(){
        setWeapons([...weapons, {name:weaponName, power:weaponPower}])
    }

    function handleRemoveWeapon(index:number){
        const newWeapons = [...weapons];
        newWeapons.splice(index, 1);
        setWeapons([...newWeapons]);
    }

    function handleSpaceshipName(event:ChangeEvent<HTMLInputElement>){
        event.preventDefault();
        setSpaceshipName(event.target.value);
    }

    return(
        <>
            <h1>Adicione uma Nave</h1>
            <a href="/spaceships">Listar Naves</a>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome da Nave</label>
                    <input name="name" id="name" type='text' maxLength={30} defaultValue={spaceshipName} onChange={handleSpaceshipName}></input>
                </div>

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
                    <label htmlFor="gas">Combustível</label>
                    <select name="gas" id="gas">
                        {Object.entries(gases).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
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
                    <label htmlFor="danger">Grau de Periculosidade</label>
                    <input type="number" name="danger" id="danger" min={0} max={10} step={1} defaultValue={0}></input>
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
                    <input type="number" name="military_power" id="military-power" min={0} max={10} step={1} defaultValue={0} onChange={handleMilitaryPower}></input>
                </div>


                {militaryPower > 0 ? (
                    <div>
                        <h2>Adicionar Armamentos</h2>

                        <label>Nome Do armamento</label>
                        <input id="weapon" type='text' maxLength={30} defaultValue={weaponName} onChange={handleWeaponName}></input>

                        <label>Poder Do armamento</label>
                        <input type="number" id="weapon-power" min={1} max={10} step={1} defaultValue={weaponPower} onChange={handleWeaponPower}></input>

                        <button type='button' onClick={handleNewWeapon} disabled={weaponName.length <= 0}>Adicionar</button>


                        <div>
                            <p>Armamentos da Nave</p>
                            {weapons.map((weapon, index) => (
                                <div key={index} className="weapon-element">
                                    <div>
                                        <p>{weapon.name}</p>
                                        <p>Poder: {weapon.power}</p>
                                    </div>
                                    <div>
                                        <button type="button" onClick={() => handleRemoveWeapon(index)}>Deletar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ): <></>}

                <button type="submit" disabled={sendingData || spaceshipName.length <= 0}>
                    {sendingData ? "Enviando Dados..." : 'Adicionar Nave'}
                </button>
            </form>
        </>
    );
}