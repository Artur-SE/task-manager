import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
    MainPage,
    Achievements,
    Settings,
    SkillTree,
    Statistics,
    Tasks,
    Error,
} from './pages'
import { SideMenu } from './components'
import { StyledWrapper } from './styled'

function App() {
    return (
        <Router>
            <StyledWrapper>
                <SideMenu />
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path='tasks' element={<Tasks />} />
                    <Route path='skillTree' element={<SkillTree />} />
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
