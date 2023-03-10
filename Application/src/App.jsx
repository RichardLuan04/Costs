import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Index from './pages/Index/index'
import Exemple from './pages/Exemple/Exemple'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Index/>} />
				<Route path='/exemple' element={<Exemple/>}/>
			</Routes>
		</Router>
	)
}

export default App
