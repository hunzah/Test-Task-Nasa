'use client'
import React, {useState} from 'react';
import styles from './main.module.css'
import {Basket} from '@/app/components/basket/Basket';
import {OrderInfo} from '@/app/components/main/orderinfo/OrderInfo';


export const Main = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Ближайшие подлёты астероидов</h3>
            <div className={styles.clickableTextContainer}><span
                onClick={() => setToggle(true)}
                className={toggle ? `${styles.clickableText} ${styles.active}` : styles.clickableText}>
                в километрах
            </span>
                |
                <span
                    onClick={() => setToggle(false)}
                    className={!toggle ? `${styles.clickableText} ${styles.active}` : styles.clickableText}>
                в лунных орбитах
            </span></div>
            <OrderInfo/>
            <Basket/>
        </div>
    );
};

