"use client"
import Image from "next/image";
import style from "./fotoperro.module.css";
import React, {useState, useEffect} from "react";
function Fotoperro(){
    const [perrito, setPerrito] = useState("/vercel.svg");
    const [estado, setEstado] = useState("esperando");
    const [habilidad, setHabilidad] = useState("esperando");
    const url="https://pokeapi.co/api/v2/pokemon/bellsprout";
    useEffect(()=>{
        fetch(url)//haz el get
        .then(res=>res.json())//recupera 
        .then(data=>{setPerrito(data.sprites.front_default)
        ,setEstado(data.species.name)
        ,setHabilidad(data.abilities[0].ability.name)
        })
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perro" height={300} width={300}/>
            <h1>{habilidad}</h1>
        </div>
    );
}
export default Fotoperro;