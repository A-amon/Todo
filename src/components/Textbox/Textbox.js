import { useState, useContext } from "react"
import { ThemeContext } from "../../context"
import styled from "styled-components"
import RadioButton from "../RadioButton/RadioButton"
import "./css/Textbox.css"

const FormStyle = styled.form`
                background-color:${({ theme }) => theme.task.bgColor};
                ${({ theme }) => theme.task.common}
                box-shadow:${({ theme }) => theme.task.boxShadow};
                `
const InputStyle = styled.input`
                        ::placeholder,
                        ::-webkit-input-placeholder {
                            color: ${({ theme }) => theme.task.placeHolder};
                        }
                        :-ms-input-placeholder {
                            color: ${({ theme }) => theme.task.placeHolder};
                        }
                        color:${({ theme }) => theme.task.color};
                    `

export default function Textbox() {
    const { state, dispatch } = useContext(ThemeContext)
    const [isComplete, setIsComplete] = useState(false)
    const [todo, setTodo] = useState("")

    const radioHandler = (event) => {
        setIsComplete(event.target.checked)
    }

    const removeWhitespace = (word) => {
        return word.replace(" ", "")
    }

    const addTodo = (event) => {
        event.preventDefault()
        if (removeWhitespace(todo).length > 0) {
            dispatch({ type: "ADD TODO", payload: { text: todo, isComplete: isComplete } })
            setIsComplete(false)
            setTodo("")
        }
    }

    return (
        <FormStyle onSubmit={addTodo} className="textbox">
            <RadioButton onChange={radioHandler} checked={isComplete} />
            <InputStyle type="text" name="todo__add" id="todo__add" placeholder="Create a new todo" aria-label="Create a new todo"
                value={todo}
                onChange={e => { setTodo(e.target.value) }} />
        </FormStyle>
    )
}