import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Projects.module.css'
import Message from '../../layout/Message/Message'
import Container from '../../layout/Container/Container'
import LinkButton from '../../layout/LinkButton/LinkButton'
import ProjectCard from '../../Project/ProjectCard/ProjectCard'
import Loading from '../../layout/Loading/Loading'

function Projects() {

    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET', 
            header: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            setProjects(data)
            setRemoveLoading(true)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto'/>
            </div>

            {message ? <Message message={message} type='sucess'/> : null}

            <Container customClass='start'>
                {projects.length > 0 ?
                    projects.map((project) => (
                        <ProjectCard id={project.id} name={project.name} budget={project.budget}
                        category={project.category.name} key={project.id}/>
                    )) : <Loading/>
                } { removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}

export default Projects