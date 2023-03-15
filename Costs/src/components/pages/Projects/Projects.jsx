import { useLocation } from 'react-router-dom'

import styles from './Projects.module.css'
import Message from '../../layout/Message/Message'
import Container from '../../layout/Container/Container'
import LinkButton from '../../layout/LinkButton/LinkButton'

function Projects() {

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto'/>
            </div>

            {message ? <Message message={message} type='sucess'/> : null}

            <Container customClass='start'>
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects