import React from 'react';
import styles from './main.module.css'
import {Order} from '@/app/components/main/order/Order';

export const Main = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Ближайшие подлёты астероидов</h3>
            <div className={styles.text}>в километрах | <span className={styles.text2}>в лунных орбитах</span></div>
            <Order/>
        </div>
    );
};

