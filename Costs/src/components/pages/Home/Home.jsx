import styles from './Home.module.css'
import pig from '../../../assets/pig.svg'

import LinkButton from '../../layout/LinkButton/LinkButton'

function Home() {
    return (
        <section className={styles.home}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gereniar os seus projetos agora mesmo!</p>
           
            <LinkButton to='/newproject' text='Criar Projeto'/>

            <img src={pig} alt="Costs" />
        </section>
    )
}

export default Home