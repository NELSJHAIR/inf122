import React from 'react';
import style from './Tabs.module.css';
function Tabs() {
  return (
    <div className={style.tabs}>
        <button className={style.tabsBackgroundItem}>
            <p className={style.tabsBackgroundItemText}>Portfolio</p>
        </button>
        <button className={style.tabsBackgroundItem1} background-color={"#00665f"} >
            <p className={style.tabsBackgroundItemText} >Skills</p>
        </button>
    </div>
  );
};

export default Tabs;
