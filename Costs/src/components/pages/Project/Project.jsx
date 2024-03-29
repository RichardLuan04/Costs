import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'

import ServiceForm from '../../Service/ServiceForm'
import ServiceCard from '../../Service/ServiceCard/ServiceCard'
import ProjectForm from '../../Project/ProjectForm/ProjectForm'
import Loading from '../../layout/Loading/Loading'
import Container from '../../layout/Container/Container'
import Message from '../../layout/Message/Message'

import styles from './Project.module.css'

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])

    const [showProject, setShowProject] = useState(false)
    const [showService, setShowService] = useState(false)

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
                setServices(data.service)
            }).catch(error => console.log(error))
    }, [id])

    const toggleProjectForm = () => {
        setShowProject(!showProject)
    }

    const toggleServiceForm = () => {
        setShowService(!showService)
    }

    const editPost = (project) => {
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

    const createService = (project) => {
        setMessage('')

        const lastService = project.service[project.service.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if (newCost > parseFloat(project.budget)) { // Verificação para não ultrapassar valor maximo
            setMessage('Orçamento ultrappasado, verifique o valor do serviço')
            setType('error')
            project.service.pop()
            return false
        }

        project.cost = newCost 

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project)
        }).then(response => response.json())
        .then(data => {
            setServices(data.service)
            setShowService(false)
        })
        .catch(error => console.log(error))
    }

    const removeService = (id, cost) => {
        const serviceUpdated = project.service.filter(
            (service) => service.id !== id
        )

        const projectUpdate = project

        projectUpdate.service = serviceUpdated
        projectUpdate.cost = parseFloat(projectUpdate.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdate.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdate)
        }).then(response => response.json())
          .then(data => {
            setProject(projectUpdate)
            setServices(serviceUpdated)
            setMessage('Serviço removido com sucesso')
          }).catch(error => console.log(error))
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
                        <div className={styles.serviceForm}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.button} onClick={toggleServiceForm}>{!showService ? 'Adicionar Serviço' : 'Fechar'}</button>

                            <div className={styles.projectInfo}>
                                {showService && (<ServiceForm handleSubmit={createService} buttonText='Adicionar Serviço' projectData={project} />)}
                            </div>
                        </div>

                        <h2>Serviços</h2>

                        <Container customClass='start'>
                            {services.length > 0 &&
                                services.map(service => (
                                    <ServiceCard id={service.id} name={service.name} cost={service.cost} description={service.description} key={service.key} handleRemove={removeService}/>
                                ))
                            }
                            {services.length === 0 && <p>Não há serviços cadastrados</p> }
                        </Container>
                    </Container>
                </div>
            ) : <Loading />}
        </>
    )
}

export default Project