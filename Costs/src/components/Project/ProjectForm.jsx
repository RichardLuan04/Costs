import { useState, useEffect } from 'react'

import Input from '../Form/Input/Input'
import Select from '../Form/Select/Select'
import Submit from '../Form/Submit/Submit'

import styles from './ProjectForm.module.css'

function ProjectForm({ buttonText }) {

    const [categories, setCategories] = useState([])

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

    return (
        <form className={styles.form}>

            <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto' />
            <Input type='number' text='Orçamento do projeto' name='budget' placeholder='Insira o orçamento total' />

            <Select name='categoyID' text='Selecione a categoria' options={categories} />

            <Submit text={buttonText} />
        </form>
    )
}

export default ProjectForm