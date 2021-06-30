

import { createContext, useReducer } from "react";
import { ThemeProvider as ThemeWrapper } from "styled-components"
import { darkTheme, lightTheme } from "./styles/theme"

export const ThemeContext = createContext()

const initialState = { theme: "dark", todos: [] }

const themeReducer = (state, action) => {
    switch (action.type) {
        case "DARK":
            return { theme: "dark", todos: state.todos }
        case "LIGHT":
            return { theme: "light", todos: state.todos }
        case "ADD TODO":
            return { theme: state.theme, todos: [...state.todos, action.payload] }
        case "UPDATE TODO":
            return { theme: state.theme, todos: action.payload }
        case "CLEAR COMPLETED":
            return { theme: state.theme, todos: [...state.todos.filter(todo => todo.isComplete === false)] }
        case "DELETE TODO":
            state.todos.splice(action.payload, 1)
            return { theme: state.theme, todos: [...state.todos] }
        default:
            return state
    }
}


export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    return <ThemeContext.Provider
        value={{ state: state, dispatch: dispatch }}>
        <ThemeWrapper theme={state.theme === "dark" ? darkTheme : lightTheme}>
            {props.children}
        </ThemeWrapper>
    </ThemeContext.Provider>
}