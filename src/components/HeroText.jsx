import styled from 'styled-components'

export const HeroText = () => {
  return (
    <HeroTextStyled>
      A simple shorter for <br/> <span className='text'>everyone</span>
    </HeroTextStyled>
  )
}

const HeroTextStyled = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: ${({ theme: { fontColor } }) => fontColor};

  .text {
    background: ${({ theme: { gradient } }) => gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
