import styles from '@/app/components/main/orderinfo/orderInfo.module.css';
import Button from '@/app/assets/Button';
import {getAsteroidsData} from '@/app/api/nasaApi';
import {formatDate} from '@/app/utils/formatDate';



export const OrderInfo = async () => {

    // const [lunar,setLunar] = useState(false)
    // const [km,setKM] = useState(true)


    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate());
    const startDate = currentDate.toISOString().split('T')[0];

    const data = await getAsteroidsData(startDate, endDate.toISOString().split('T')[0]);


    const asteroidItems = [];


    // console.log(data.near_earth_objects['2023-08-18'].map(el => el.is_potentially_hazardous_asteroid))


    // Перебираем астероиды и создаем элементы разметки для каждого
    for (const date in data.near_earth_objects) {
        const asteroids = data.near_earth_objects[date];
        asteroids.forEach(asteroid => {

            const lunarOrbits = Math.floor(Number(asteroid.close_approach_data[0].miss_distance.lunar));
            const lunarOrbitsText = lunarOrbits > 4 ? 'лунных орбит' : 'лунные орбиты';

            const asteroidMarkup = (
                <div key={asteroid.id}>
                    <span
                        className={styles.date}> {formatDate(asteroid.close_approach_data[0].close_approach_date)}
                    </span>


                    <div className={styles.infoContainer}>
                        <div className={styles.distanceContainer}>
                        <span className={styles.distance}>
                            {lunarOrbits} {lunarOrbitsText}
                        </span>
                            <img src="/Arrow.svg" className={styles.arrowImg}/>
                        </div>
                        {asteroid.is_potentially_hazardous_asteroid[0] ?
                            <img className={styles.bigAsteroidImg} src={'/stone.png'} alt={asteroid.name}/>
                            :
                            <img className={styles.smallAsteroidImg} src={'/stone.png'} alt={asteroid.name}/>
                            }
                        <div className={styles.diamContainer}>
                            <span className={styles.fq}> 2021 FQ </span>
                            <span className={styles.stoneSize}>
                               Ø {Number(asteroid.estimated_diameter.meters.estimated_diameter_min).toFixed(2)} м
                            </span>
                        </div>
                    </div>


                    <Button text="заказать"/>
                    {asteroid.is_potentially_hazardous_asteroid ? <span>⚠️Опасен</span> : <span>🕊️ Безобидный</span>}


               </div>
            );
            asteroidItems.push(asteroidMarkup);
        });
    }

    return (
        <div className={styles.container}>
            {asteroidItems}
        </div>
    );
};