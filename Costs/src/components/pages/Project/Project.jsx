import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ProjectForm from '../../Project/ProjectForm/ProjectForm'
import Loading from '../../layout/Loading/Loading'
import Container from '../../layout/Container/Container'
import Message from '../../layout/Message/Message'

import styles from './Project.module.css'

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProject, setShowProject] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                setProject(data)
            }).catch(error => console.log(error))
    }, [id])

    function toggleProjectForm() {
        setShowProject(!showProject)
    }

    function editPost(project) {
        setMessage('')

        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH', // Atualiza o que for enviado
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(response => response.json())
            .then(data => {
                setProject(data)
                setShowProject(false)

                setMessage('Projeto atualizado!')
                setType('sucess')
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass='column'>
                        {message ? <Message type={type} message={message} /> : null}
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.name} </h1>
                            <button className={styles.button} onClick={toggleProjectForm}>{!showProject ? 'Editar Projeto' : 'Fechar'}</button>
                            {!showProject ? (
                                <div className={styles.projectInfo}>
                                    <p> <span>Categoria:</span> {project.category.name} </p>
                                    <p> <span>Total de Orçamento:</span> R${project.budget} </p>
                                    <p> <span>Total Utilizado:</span> R${project.cost} </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <ProjectForm handleSubmit={editPost} buttonText='Concluir edição' projectData={project} />
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : <Loading />}
        </>
    )
}

export default Project