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
import { StyledWrapper } from './styled'

function App() {
    return (
        <Router>
            <StyledWrapper>
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
            </StyledWrapper>
        </Router>
    )
}

export default App
