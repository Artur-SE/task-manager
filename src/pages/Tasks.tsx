import React, { useState } from 'react'
// Todo Name
// Todo Time
// Todo complexity
// done undone bool
// play / pause
// edit / settings button
// remove button
interface ITodo {
    name: string
    minutes: number
    hours: number
    complexity: number
}
export const Tasks = (): JSX.Element => {
    //state values
    const [todo, setTodo] = useState<ITodo>({
        name: '',
        minutes: 0,
        hours: 0,
        complexity: 0,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [e.currentTarget.name]: e.currentTarget.value })
        // console.log([e.currentTarget.name])
    }
    return (
        <main>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    name='name'
                    type='text'
                    className='todo'
                    placeholder='add your ToDo here'
                    value={todo.name}
                    onChange={changeHandler}
                />
                <input
                    name='hours'
                    type='number'
                    className='hours'
                    value={todo.hours}
                    onChange={changeHandler}
                />
                <input
                    name='minutes'
                    type='number'
                    className='minutes'
                    min='0'
                    max='59'
                    value={todo.minutes}
                    onChange={changeHandler}
                />

                <input
                    name='complexity'
                    type='number'
                    className='complexity'
                    min='1'
                    max='4'
                    value={todo.complexity}
                    onChange={changeHandler}
                />
                <button className='submit-btn' type='submit'>
                    Add to List
                </button>
                <h1>todo: {todo.name}</h1>
                <h1>hours: {todo.hours}</h1>
                <h1>miuntes: {todo.minutes}</h1>
                <h1>complexity: {todo.complexity}</h1>
            </form>
        </main>
    )
}
