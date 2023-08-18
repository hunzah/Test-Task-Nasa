import styles from '@/app/components/main/orderinfo/orderInfo.module.css';
import Button from '@/app/assets/Button';
import {getAsteroidsData} from '@/app/api/nasaApi';
import {formatDate} from '@/app/utils/formatDate';
import AsteroidImg from './../../../../../public/stone.png'

export const OrderInfo = async () => {
    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate());
    const startDate = currentDate.toISOString().split('T')[0];

    const data = await getAsteroidsData(startDate, endDate.toISOString().split('T')[0]);


    const asteroidItems = [];


    console.log(data.near_earth_objects['2023-08-18'].map(el => el.is_potentially_hazardous_asteroid[0]))


    // Перебираем астероиды и создаем элементы разметки для каждого
    for (const date in data.near_earth_objects) {
        const asteroids = data.near_earth_objects[date];
        asteroids.forEach(asteroid => {
            const asteroidMarkup = (
                <div key={asteroid.id} className={styles.info}>
                    <span
                        className={styles.distanceKm}> {formatDate(asteroid.close_approach_data[0].close_approach_date)} </span>


                    {asteroid.is_potentially_hazardous_asteroid[0] ?
                        <img className={styles.bigAsteroidImg} src={AsteroidImg} alt={asteroid.name}/>
                        :
                        <img className={styles.smallAsteroidImg} src={AsteroidImg} alt={asteroid.name}/>
                    }

                    <span className={styles.distanceFq}>
                        {Number(asteroid.close_approach_data[0].miss_distance.kilometers).toFixed(2)} км
                    </span>

                    <div className={styles.stoneSize}>
                        {Number(asteroid.close_approach_data[0].miss_distance.lunar).toFixed(2)} FQ
                    </div>
                    <div className={styles.stoneSize}>
                        {Number(asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(2)} м
                    </div>
                </div>
            );
            asteroidItems.push(asteroidMarkup);
        });
    }

    return (
        <div className={styles.container}>
            {asteroidItems}
            <Button text="заказать"/>
        </div>
    );
};