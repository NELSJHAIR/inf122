"use client"
import React from 'react';
import Image from 'next/image';
import style from './Button.module.css';
function Buttons () {
  return (
    <div className={style.buttons}>
        <button className={style.btnPrimary} onclick="download()">
            <div className={style.btnContent}>
                <p>Download CV</p>
                    <Image src="/Bottom Alignment.svg" alt="arrow" width={28} height={24}/>
            </div>
        </button>
              <a className={style.btnSecondary} href="https://mail.google.com/">
                <div className={style.btnContent}><p>Contact me</p>
                </div>
            </a>
    </div>
  );
};

export default Buttons;
