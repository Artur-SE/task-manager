import { StyledTodoListWrapper } from './styled'
import { ITodoListProps } from './types'

export const TodoList = (props: ITodoListProps): JSX.Element => {
    const { todoList } = props
    return (
        <StyledTodoListWrapper>
            {todoList.map((todo) => {
                const { id, name, hours, minutes, complexity } = todo
                return (
                    <div className='todo' key={id}>
                        <p>id:{id}</p>
                        <h3>{name}</h3>
                        <p>
                            Time {hours}:{minutes}
                        </p>

                        <p>{complexity}</p>
                    </div>
                )
            })}
        </StyledTodoListWrapper>
    )
}
