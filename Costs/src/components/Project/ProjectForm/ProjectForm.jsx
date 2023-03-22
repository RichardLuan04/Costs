import { useState, useEffect } from 'react'

import Input from '../../Form/Input/Input'
import Select from '../../Form/Select/Select'
import Submit from '../../Form/Submit/Submit'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, projectData, buttonText }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(error => console.log(error))
    }, [])

    const submit = (event) => {
        event.preventDefault()
        handleSubmit(project)
    }

    function handleChange(event) {
        setProject({...project, [event.target.name]: event.target.value})
    }

    function handleCategory(event) {
        setProject({...project, category: {
            id: event.target.value,
            name: event.target.options[event.target.selectedIndex].text
        },})
    }

    return (
        <form onSubmit={submit} className={styles.form}>

            <Input type='text' text='Nome do projeto' name='name' value={project.name ? project.name : ''}
            placeholder='Insira o nome do projeto' handleOnCHange={handleChange}/>

            <Input type='number' text='Orçamento do projeto' name='budget' value={project.budget ? project.budget : ''}
            placeholder='Insira o orçamento total' handleOnCHange={handleChange}/>

            <Select name='category' text='Selecione a categoria' options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>

            <Submit text={buttonText} />
        </form>
    )
}

export default ProjectForm