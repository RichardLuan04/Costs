import styles from './Form.module.css'
import { useState } from 'react'

function Form() {

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`Usuario: ${name}\nSenha: ${password}`)
    }

    return (
        <>
            <h2 className={styles.h2}>Meu cadastro</h2>

            <form onSubmit={cadastrarUsuario}>
                <label className={styles.label} htmlFor="name">Nome:</label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Digite seu nome' name='name' className={styles.textBox}/>
                
                <label className={styles.label} htmlFor="password">Senha: </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Digite sua senha' name='password' className={styles.textBox}/>

                <input type="submit" value="Cadastrar" className={styles.button}/>
            </form>
        </>
    )
}

export default Form