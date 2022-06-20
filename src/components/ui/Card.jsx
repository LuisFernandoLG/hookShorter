import styled from 'styled-components'

export const Card = ({ children, pd, mg }) => {
  return (
    <CardStyled pd={pd} mg={mg}>
      {children}
    </CardStyled>
  )
}

const CardStyled = styled.div`
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  padding: ${({ pd }) => pd};
  margin: ${({ mg }) => mg};
  width: max-content;

  box-shadow: 0.2rem 0.4rem 70px -10px ${({ theme: { disabledColor } }) => disabledColor};
`
