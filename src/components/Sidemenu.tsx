import React from 'react'
import { Link } from 'react-router-dom'
import { Achievements, Settings, Skilltree, Statistics, Tasks } from '../pages'

export const Sidemenu = (): JSX.Element => {
    return (
        <div className=''>
            <Link to='/'>Home</Link>
            <Link to='/tasks'>Tasks</Link>
            <Link to='/skilltree'>Skilltree</Link>
            <Link to='/achievements'>Achievements</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/settings'>Settings</Link>
        </div>
    )
}
