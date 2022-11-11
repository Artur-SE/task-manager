import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from '../components'
import { ITodo } from './types'

// Todo Name
// Todo Time
// Todo complexity
// done undone bool
// play / pause
// edit / settings button
// remove button

export const Tasks = (): JSX.Element => {
    //state values
    const [showInputForm, setShowInputForm] = useState<boolean>(true)
    const [todo, setTodo] = useState<ITodo>({
        id: '',
        name: '',
        minutes: 0,
        hours: 0,
        complexity: 0,
    })
    const [todoList, setTodoList] = useState<ITodo[]>([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newID = uuidv4()
        const newTodo = { ...todo, id: newID }
        setTodoList([...todoList, newTodo])
        setShowInputForm(!showInputForm)
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [e.currentTarget.name]: e.currentTarget.value })
        // console.log([e.currentTarget.name])
    }

    return (
        <main>
            {showInputForm ? (
                <button onClick={() => setShowInputForm(!showInputForm)}>
                    add a new task!
                </button>
            ) : (
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
                </form>
            )}
            <TodoList todoList={todoList} />
        </main>
    )
}
