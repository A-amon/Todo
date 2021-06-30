import styled from "styled-components"
import "./css/RadioButton.css"

const LabelStyle = styled.label`
                    border:1px solid ${({ theme }) => theme.radio.borderColor}
                    `

export default function RadioButton({ onChange, checked, id }) {
    return (
        <div className="completed__wrapper" >
            <input type="checkbox" name={`completed__checkbox__${id}`} id={`completed__checkbox__${id}`} onChange={onChange} checked={checked} />
            <LabelStyle htmlFor={`completed__checkbox__${id}`}>Check if completed todo</LabelStyle>
        </div>
    )
}