import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject/NewProject'
import Projects from './components/pages/Projects/Projects'
import Project from './components/pages/Project/Project'

import Container from './components/layout/Container/Container'
import NavBar from './components/layout/NavBar/NavBar'
import Footer from './components/layout/Footer/Footer'

function App() {

	return (
		<Router>
			
			<NavBar/>

			<Container customClass='min-height'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/company' element={<Company />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/newproject' element={<NewProject />} />
					<Route path='/project/:id' element={<Project />} />
				</Routes>
			</Container>

			<Footer/>
		</Router>
	)
}

export default App
