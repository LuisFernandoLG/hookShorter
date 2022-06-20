import styled from 'styled-components'
import { Logo } from '../components/Logo'

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
/* background:Red; */
padding:0.5rem 1rem;
`