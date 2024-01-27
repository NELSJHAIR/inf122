import React from 'react';
import style from './ProjectCards.module.css';
import Image from 'next/image';
function ProjectCard() {
  return (
    <div className={style.projectContainer}>
        <div className={style.contentCardImg}>
            <Image src="/Rectangles/Rectangle 1.png" width={362} height={226}/>
            <div className={style.contentCardImgOverlay}></div>
            <div className={style.contentCardImgDetail}>
                <p className={style.title}>SmarterTrading411</p>
                <p className={style.detail}>Landing page of SmarterTrading411 created using WordPress</p>
                <button className={style.btn}>
                    <Image src="/Link.svg" width={20} height={20}/>
                </button>
            </div>
            </div>
            <div className={style.contentCardImg}>
                <Image src="/Rectangles/Rectangle 1 (1).png" width={362} height={226}/>
                <div className={style.contentCardImgOverlay}></div>
            </div>
            <div className={style.contentCardImg}>
                <Image src="/Rectangles/Rectangle 1 (2).png" width={362} height={226}/>
                <div className={style.contentCardImgOverlay}></div>
            </div>
            <div className={style.contentCardImg}>
                <Image src="/Rectangles/Rectangle 1 (3).png" width={362} height={226}/>
                <div className={style.contentCardImgOverlay}></div>
            </div>
            <div className={style.contentCardImg}>
                <Image src="/Rectangles/Rectangle 1 (4).png" width={362} height={226}/>
                <div className={style.contentCardImgOverlay}></div>
            </div>
            <div className={style.contentCardImg}>
                <Image src="/Rectangles/Rectangle 1 (5).png" width={362} height={226}/>
                <div className={style.contentCardImgOverlay}></div>
            <div/>
        </div>
    </div>
  );
};

export default ProjectCard;
