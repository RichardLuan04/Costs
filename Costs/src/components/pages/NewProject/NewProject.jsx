import { useNavigate } from 'react-router-dom'

import ProjectForm from '../../Project/ProjectForm/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.service = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then(response => response.json())
          .then(data => {
            navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
          })
          .catch(error => console.log(error))

    }

    return(
        <div className={styles.newProject}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <ProjectForm handleSubmit={createPost} buttonText='Criar projeto'/>
        </div>
    )
}

export default NewProject