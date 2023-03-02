import './App.css'

import Text from './components/Text/Text'

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
		</div>
	)
}

export default App
