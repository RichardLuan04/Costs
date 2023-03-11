import ProjectForm from '../../Project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return(
        <div className={styles.newProject}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>

            <ProjectForm buttonText='Criar projeto'/>
        </div>
    )
}

export default NewProject