import logo from './logo.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    Mainpage,
    Achievements,
    Settings,
    Skilltree,
    Statistics,
    Tasks,
    Error,
} from './pages'
import { Sidemenu } from './components'

function App() {
    return (
        <Router>
            <Sidemenu />
            <Routes>
                <Route index element={<Mainpage />} />
                <Route path='tasks' element={<Tasks />} />
                <Route path='skilltree' element={<Skilltree />} />
                <Route path='achievements' element={<Achievements />} />
                <Route path='statistics' element={<Statistics />} />
                <Route path='settings' element={<Settings />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App
