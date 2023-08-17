import styles from '@/app/components/main/orderinfo/orderInfo.module.css';
import Button from '@/app/assets/Button';
import {getAsteroidsData} from '@/app/api/nasaApi';

export const OrderInfo = async () => {
    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate());
    const startDate = currentDate.toISOString().split('T')[0];

    const data = await getAsteroidsData(startDate, endDate.toISOString().split('T')[0]);

console.log(data.near_earth_objects['2023-08-17'].map(el=>el.close_approach_data.map(el=>el.miss_distance)))
    return (
        <div className={styles.container}>
            {data.near_earth_objects['2023-08-17'].map(el => (
                <div key={el.id} className={styles.date}>
                    <p>Date: {el.close_approach_data[0].close_approach_date}</p>
                </div>
            ))}
            <div className={styles.info}>
                <span className={styles.distance}></span>
                <img className={styles.img}/>
                <span className={styles.text}><div className={styles.stoneSize}></div></span>
            </div>
            <Button text="заказать"/>
        </div>
    );
};
