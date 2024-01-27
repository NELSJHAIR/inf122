"use client"
import Image from "next/image";
import React from "react";
import style from "./perfil.module.css";

function Perfil (){
    return(
        <div className={style.profile}>
            <figure className={style.profile_img}>
                <Image src="/mi-foto.jpeg" alt="Nelsjhair Saire" width={215} height={215}/>
            </figure>
            <div className={style.profile_info}>
                <h1>Nelsjhair Saire</h1>
                <p>Student</p>
                <div className={style.profile_social}>
                    <a href="https://github.com/NELSJHAIR" target="_blank">
                        <Image src="/Brands/github.svg" alt="GitHub" width={36} height={37}/>
                    </a>
                    <a href="https://twitter.com/N3L5003" target="_blank">
                        <Image src="/Brands/twitter.svg" alt="GitHub" width={36} height={37}/>   
                    </a>
                    <a href="https://www.linkedin.com/in/nelsjhair-saire-duran-204642289/" target="_blank">
                        <Image src="/Brands/linkedin.svg" alt="GitHub" width={36} height={37}/> 
                    </a>
                    <a href="https://www.youtube.com/@nelsjhairsaireduran2870" target="_blank">
                        <Image src="/Brands/youtube.svg" alt="GitHub" width={36} height={37}/> 
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Perfil;