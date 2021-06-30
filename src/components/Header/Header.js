import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { ThemeContext } from "../../context"
import colors from "../../styles/colors"
import "./css/Header.css"

export default function Header(props) {
    const { state, dispatch } = useContext(ThemeContext)
    const header = useTheme().header

    const switchTheme = () => {
        if (state.theme === "dark")
            dispatch({ type: "LIGHT" })
        else
            dispatch({ type: "DARK" })
    }

    return (
        <header className="header">
            <h1 style={{ color: colors.white }}>Todo</h1>
            <input type="image" src={header.icon} alt="Switch to dark mode" onClick={switchTheme} />
        </header>
    )
}