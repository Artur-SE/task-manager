import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Achievements,
    Settings,
    Skilltree,
    Statistics,
    Tasks,
} from '../../pages'
import { StyledSideMenuWrapper } from './styled'

export const Sidemenu = (): JSX.Element => {
    return (
        <StyledSideMenuWrapper>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
            <NavLink to='/skilltree'>Skilltree</NavLink>
            <NavLink to='/achievements'>Achievements</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
        </StyledSideMenuWrapper>
    )
}
