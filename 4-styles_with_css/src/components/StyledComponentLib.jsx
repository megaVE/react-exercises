import styled from "styled-components"

const StyledButton = styled.button`
    font-size: 20px;
    padding: 5px 10px;
    color: #FF0000;
    background-color: #00FFFF;
    text-weight: bold;
`

const StyledComponentLib = () => {
    return (
        <StyledButton>Button</StyledButton>
    )
}

export default StyledComponentLib