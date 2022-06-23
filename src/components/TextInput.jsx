import styled from 'styled-components'

export const TextInput = ({handleChange, value, type}) => {
  return (
    <TextInputStyled type={type} value={value} onChange={handleChange} placeholder='Enlace . . .'></TextInputStyled>
  )
}

const TextInputStyled = styled.input`
  width: 500px;
  min-width: 300px;
  color: ${({ theme: { fontColor } }) => fontColor};
  font-weight: 600;
  &::placeholder {
    color: ${({ theme: { disabledColor } }) => disabledColor};
  }
`
