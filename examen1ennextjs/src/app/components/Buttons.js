"use client"
import React from 'react';
import Image from 'next/image';
import style from './Button.module.css';
function Buttons () {
  return (
    <div className={style.buttons}>
        <button className={style.btnPrimary}>
            <div className={style.btnContent}>
                <a href='https://www.canva.com/design/DAF4Zhy4cX8/XvJismg-C25G-8yHSmn0Fg/view?utm_content=DAF4Zhy4cX8&utm_campaign=designshare&utm_medium=link&utm_source=editor'>Download CV</a>
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
