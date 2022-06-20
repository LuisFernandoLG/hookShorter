import styled from 'styled-components'

export const TextInput = () => {
  return (
    <TextInputStyled type='text' placeholder='Enlace . . .'></TextInputStyled>
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
