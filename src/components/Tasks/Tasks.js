import { useContext, useState, useEffect } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context"
import Task from "../Task/Task"
import "./css/Tasks.css"

const TasksContainer = styled.div`
                        background-color:${({ theme }) => theme.task.bgColor};
                        color:${({ theme }) => theme.tasks.color};
                        box-shadow:${({ theme }) => theme.task.boxShadow};
                        `

const FooterButton = styled.button`
                    &:hover{
                        color:${({ theme }) => theme.tasks.hoverColor};
                    }    
                    `
const TaskPlaceholder = styled.li`
                    ${({ theme }) => theme.task.common}
                    `

export default function Tasks() {
    const { state, dispatch } = useContext(ThemeContext)
    const [todos, setTodos] = useState([])
    const [currentTab, setCurrentTab] = useState(0)

    useEffect(() => {
        if (currentTab === 0)
            setTodos([...state.todos])
        else if (currentTab === 1)
            setTodos([...state.todos.filter(todo => todo.isComplete === false)])
        else
            setTodos([...state.todos.filter(todo => todo.isComplete === true)])
    }, [state.todos, currentTab])

    const switchTab = (event) => {
        let selectedId = event.target.id
        if (selectedId === "all")
            setCurrentTab(0)
        else if (selectedId === "active")
            setCurrentTab(1)
        else
            setCurrentTab(2)
    }

    const clearCompleted = () => {
        dispatch({ type: "CLEAR COMPLETED" })
    }

    return (
        <TasksContainer className="tasks__container">
            <ul className="tasks" aria-live="polite">
                {
                    todos.length > 0 ?
                        todos.map((todo, ind) => (
                            <Task isComplete={todo.isComplete} text={todo.text} key={ind} id={ind} />
                        )) :
                        <TaskPlaceholder className="tasks__placeholder">
                            {`${state.todos.length === 0 ? 'No tasks yet!' : ''}`}
                            {`${state.todos.length > 0 && currentTab === 1 ? 'No active tasks!' : ''}`}
                            {`${state.todos.length > 0 && currentTab === 2 ? 'No completed tasks!' : ''}`}
                        </TaskPlaceholder>
                }
            </ul>
            <div className="tasks__footer">
                <span className="tasks__left">
                    {`${todos.length > 0 ? `${todos.length} item${todos.length > 1 ? 's' : ''} left` : 'No items'}`}
                </span>
                <ul className="tasks__filters">
                    <li className="tasks__filter">
                        <FooterButton id="all" onClick={switchTab} className={`${currentTab === 0 ? 'active' : ''}`} aria-label="View all todos">All</FooterButton>
                    </li>
                    <li className="tasks__filter">
                        <FooterButton id="active" onClick={switchTab} className={`${currentTab === 1 ? 'active' : ''}`} aria-label="View active todos">Active</FooterButton>
                    </li>
                    <li className="tasks__filter">
                        <FooterButton id="completed" onClick={switchTab} className={`${currentTab === 2 ? 'active' : ''}`} aria-label="View completed todos">Completed</FooterButton>
                    </li>
                </ul>
                <FooterButton className="tasks__clear" onClick={clearCompleted}>
                    Clear Completed
                </FooterButton>
            </div>
        </TasksContainer>
    )
}