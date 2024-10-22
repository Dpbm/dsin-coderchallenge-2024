'use client';
import { FullSpaceship } from '@/app/types/spaceship';
import {sizes, colors, damages, gases } from '../../../constants';
import { ChangeEvent, useState, FormEvent } from 'react';
import {createHash} from 'crypto';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { redirect } from 'next/navigation';

type FormProps = {
    spaceship: FullSpaceship,
    initialHash: string
}

export default function Form({spaceship,initialHash}:FormProps){
    const [data, setData] = useState(spaceship);

    const [weaponName, setWeaponName] = useState('');
    const [weaponPower, setWeaponPower] = useState(1);

    const [sendingData, setSendingData] = useState(false);
    const [deletingData, setDeletingData] = useState(false);

    const dataHash = createHash('sha256').update(JSON.stringify(data)).digest('hex');

    function handleChange(event:ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>){
        event.preventDefault();

        let newValue : number|string = event.target.value;
        if(!isNaN(Number(newValue))) newValue = Number(newValue);

        setData({...data, [event.target.name]:newValue});
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()


        setSendingData(true);

        const res = await fetch('/api/spaceship',{
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{
                "Accept":"application/json", 
                "Content-Type":"application/json"
            }
          });

        setSendingData(false);

        if(!res.ok)
            alert((await res.json())['message']);
        else{
            alert('Dados Atualizados Com Sucesso!');
            window.location.reload();
        }
    }

    async function handleDeleteSpaceship() {
        if(!confirm("Você realmente quer deletar essa nave?")) return;

        setDeletingData(true);

        const res = await fetch(`/api/spaceship?id=${data.id}`,{
            method: 'DELETE',
        });

        setDeletingData(false);

        if(!res.ok)
            alert((await res.json())['message']);
        else{
            alert('Dados Deletados Com Sucesso!');
            redirect('/spaceships');
        }
    }

    function handleDrag(event:google.maps.MapMouseEvent){
        const latLng = event.latLng;
        if(!latLng)return;
        const lat = latLng.lat();
        const lng = latLng.lng();

        setData({...data, lat, lng});
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
        // remember to parse this empty ID
        setData({...data, weapons:[...data.weapons, {id: NaN, spaceship_id:data.id, name:weaponName, power:weaponPower}]})
    }

    function handleRemoveWeapon(index:number){
        const newWeapons = [...data.weapons];
        newWeapons.splice(index, 1);
        setData({...data, weapons:[...newWeapons]});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome da Nave</label>
                <input name="name" id="name" type='text' maxLength={30} defaultValue={data.name} onChange={handleChange}></input>
            </div>

            <div>
                <label htmlFor="size">Tamanho da Nave</label>
                <select name="size" id="size" defaultValue={data.size} onChange={handleChange}>
                    {Object.entries(sizes).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="color">Cor da Nave</label>
                <select name="color" id="color" defaultValue={data.color} onChange={handleChange}> 
                    {Object.entries(colors).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="damage">Estado da Nave</label>
                <select name="damage" id="damage" defaultValue={data.damage} onChange={handleChange}>
                    {Object.entries(damages).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="gas">Combustível</label>
                <select name="gas" id="gas" defaultValue={data.gas} onChange={handleChange}>
                    {Object.entries(gases).map(([k,v], index) => <option key={index} defaultValue={k}>{v}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="location">Localização da Nave</label>
                <APIProvider apiKey={String(process.env.NEXT_PUBLIC_MAPS_API_KEY)}>
                    <Map
                    style={{width: '30vw', height: '500px'}}
                    defaultCenter={{lat:data.lat, lng:data.lng}}
                    defaultZoom={14}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    >
                        <Marker position={{lat:data.lat, lng:data.lng}} draggable onDrag={handleDrag} />
                        <input name="lat" value={data.lat} style={{display:'none'}} readOnly/>
                        <input name="lng" value={data.lng} style={{display:'none'}} readOnly/>
                    </Map>
                </APIProvider>
            </div>

            <div>
                <label htmlFor="survivors">Total de Sobreviventes</label>
                <input type="number" name="survivors" id="survivors" min={0} max={200} step={1} defaultValue={data.survivors} onChange={handleChange}></input>
            </div>

            <div>
                <label htmlFor="survivors_description">Descrição da situação dos sobreviventes</label>
                <textarea name="survivors_description" id="survivors-description" maxLength={300} defaultValue={data.survivors_description} onChange={handleChange}></textarea>
            </div>

            <div>
                <label htmlFor="value">Nível de valor agregado a nave</label>
                <input type="number" name="value" id="value" min={0} max={10} step={1} defaultValue={data.value} onChange={handleChange}></input>
            </div>

            <div>
                <label htmlFor="military_power">Poderio Militar Total da Nave</label>
                <input type="number" name="military_power" id="military-power" min={0} max={10} step={1} defaultValue={data.military_power} onChange={handleChange}></input>
            </div>


            {data.military_power > 0 ? (
                <div>
                    <h2>Armamentos</h2>

                    <label>Nome Do armamento</label>
                    <input id="weapon" type='text' maxLength={30} defaultValue={''} onChange={handleWeaponName}></input>

                    <label>Poder Do armamento</label>
                    <input type="number" id="weapon-power" min={1} max={10} step={1} defaultValue={1} onChange={handleWeaponPower}></input>

                    <button type='button' onClick={handleNewWeapon} disabled={weaponName.length <= 0}>Adicionar</button>


                    <div>
                        <p>Armamentos da Nave</p>
                        {data.weapons.map((weapon, index) => (
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

            <button type="submit" disabled={sendingData || data.name.length <= 0 || dataHash == initialHash}>
                {sendingData ? "Atualizando Dados..." : 'Atualizar Nave'}
            </button>
            <button type="button" onClick={handleDeleteSpaceship} disabled={deletingData}>
                {deletingData ? 'Deletando Dados...' : 'Deletar Nave'}
            </button>
        </form>
    )
}