import React from 'react';
import styles from './main.module.css'
import {Basket} from '@/app/components/basket/Basket';
// import {OrderInfo} from '@/app/components/main/orderinfo/OrderInfo';

export const Main = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Ближайшие подлёты астероидов</h3>
            <div className={styles.text}>в километрах | <span className={styles.text2}>в лунных орбитах</span></div>
            {/*<OrderInfo/>*/}
            <Basket/>
        </div>
    );
};

