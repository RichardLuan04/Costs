import { Link } from "react-router-dom"

function Exemple() {
    return (
        <>
            <h1>Bem vindo a pagina de exemplo de navegação</h1>

            <Link to='/'>
                <button>Clique para voltar</button>
            </Link>
        </>
    )
}

export default Exemple