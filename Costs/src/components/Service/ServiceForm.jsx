import { useState } from 'react'

import styles from '../Project/ProjectForm/ProjectForm.module.css'

import Input from '../Form/Input/Input'
import Submit from '../Form/Submit/Submit'

function ServiceForm({ handleSubmit, buttonText, projectData}) {

    const [service, setService] = useState([])

    const submit = (event) => {
        event.preventDefault()
        projectData.service.push(service)
        handleSubmit(projectData)
    }

    const handleChange = (event) => {
        setService({...service, [event.target.name] : event.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Nome do serviço' name='name'
                placeholder='Insira o nome do serviço' handleOnCHange={handleChange} />

            <Input type='number' text='Custo do serviço' name='cost'
                placeholder='Insira o valor total' handleOnCHange={handleChange} />

            <Input type='text' text='Descrição do serviço' name='description'
                placeholder='Descreva o serviço' handleOnCHange={handleChange} />

            <Submit text={buttonText}/>
        </form>
    )
}

export default ServiceForm