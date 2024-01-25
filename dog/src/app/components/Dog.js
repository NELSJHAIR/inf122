'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";
import "./Dog.module.css";

function Dog(){
    const [dog,setDog]=useState("/versel.svg");
    const url ="https://dog.ceo/api/breed/waterdog/spanish/images/random";
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setDog(data.message)})
    },[])
    return(
        <div className={"style.box"}>
        <h1>Spanish Waterdog</h1>
        <Image src={dog} alt="dog" width={500} height={500}/>
        </div>
    );
    
}
export default Dog;