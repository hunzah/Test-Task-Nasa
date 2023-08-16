import styles from '@/app/components/main/order/order.module.css';

export const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>

            </div>
            <div className={styles.info}>
                <span className={styles.distance}></span>
                <img className={styles.img}/>
                <span className={styles.stoneSize}></span>
            </div>

        </div>
    );
};

