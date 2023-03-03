import styles from './Games.module.css'
import List from '../List/List'

function Games() {

    return (
        <>
            <h2 className={styles.h2}>Lista de Jogos</h2>

            <ul className={styles.games}>
                <List name='Resident Evil 4' console='Ps2'/>
                <List name='Far Cry 4' console='Xbox 360'/>
                <List name='God of War: Ragnarok' console='Ps5'/>
                <List name='God of War 3' console='Ps3'/>
                <List name='King Piece' console={10}/>
                <List/>
            </ul>
        </>
    )
}

export default Games