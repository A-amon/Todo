import { useState, useContext } from "react"
import styled, { useTheme } from "styled-components"
import { ThemeContext } from "../../context"
import RadioButton from "../RadioButton/RadioButton"
import crossIcon from "../../assets/icons/icon-cross.svg"
import "./css/Task.css"

const ListItemStyle = styled.li`
                background-color:${({ theme }) => theme.task.bgColor};
                color:${({ theme }) => theme.task.color};
                border-bottom:1px solid ${({ theme }) => theme.task.borderBottom};
                ${({ theme }) => theme.task.common}`

export default function Task({ text, isComplete, id }) {
    const { state, dispatch } = useContext(ThemeContext)
    const theme = useTheme()

    const completeTodo = (event) => {
        radioHandler(event)
    }

    const radioHandler = (event) => {
        let updated = [...state.todos]
        updated[id].isComplete = !isComplete
        dispatch({ type: "UPDATE TODO", payload: updated })
    }

    const deleteTodo = (id) => {
        dispatch({ type: "DELETE TODO", payload: id })
    }

    return (
        <ListItemStyle className="task">
            <RadioButton checked={isComplete} onChange={radioHandler} id={id} />
            <span onClick={completeTodo} className="task__text" style={{ textDecoration: `${isComplete ? 'line-through' : ''}`, color: `${isComplete ? theme.tasks.color : ''}` }}>{text}</span>
            <input className="task__delete" type="image" src={crossIcon} alt={`Delete todo titled: ${text}`} onClick={e => deleteTodo(id)} />
        </ListItemStyle>
    )
}