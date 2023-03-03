import './App.css'

import Text from './components/Text/Text'
import Games from './components/Games/Games'
import Form from './components/Form/Form'

function App() {

	return (
		<div className="App">
			<div className="container">
				<h1>Componente + Props + module.css:</h1>

				<div className="text-box">
					<Text number='1' />
					<Text number='2' />
					<Text number='3' />
				</div>
			</div>

			<div className="container">
				<h1>Props Avançada:</h1>

				<Games/>
			</div>

			<div className="container">
				<h1>Funções + useState: </h1>

				<Form/>
			</div>
		</div>
	)
}

export default App
