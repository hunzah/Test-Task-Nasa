import styles from '@/app/components/main/orderinfo/orderInfo.module.css';
import Button from '@/app/assets/Button';
import {getAsteroidsData} from '@/app/api/nasaApi';








console.log('scs')

export const OrderInfo = async () => {


const data = await getAsteroidsData()
debugger
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                 sazdfvaszdvd
            </div>
            <div className={styles.info}>
                <span className={styles.distance}></span>
                <img className={styles.img}/>
                <span className={styles.text}><div className={styles.stoneSize}></div></span>
            </div>
            <Button text="заказать"/>
        </div>
    );
};
