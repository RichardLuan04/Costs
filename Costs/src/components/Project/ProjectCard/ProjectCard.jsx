import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'

function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.projectCard}>
            <h4> {name} </h4>

            <p> <span>Orçamento: </span> R${budget} </p>
            <p className={styles.categoryText} > <span className={`${styles[category.toLowerCase()]}`} ></span> {category} </p>

            <div className={styles.projectActions}>
                <Link to={`/project/${id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={() =>  handleRemove(id) }>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard