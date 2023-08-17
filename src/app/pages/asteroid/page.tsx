import styles from '../../asteroid.module.css'
import Button from '@/app/assets/Button';


export default function Asteroid() {
    return (
        <div className={styles.bg}>
            <Button text='заказать'/>
        </div>
    );
};

