import styles from './styles/home.module.css'



export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleContainer} >
                    <h1 className={styles.title}>ARMAGEDDON 2023</h1>
                    <div>ООО “Команда им. Б. Уиллиса”.</div>
                    <div>Взрываем астероиды с 1998 года.</div>
                </div>
                <Main/>
                <div className={styles.bgColor}>
                </div>
            </div>
        </>
    )
}
