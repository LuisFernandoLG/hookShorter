import styled, { css } from 'styled-components'
import { FlexContainer } from '../wrappers/FlexContainer'
import { Loader } from './Loader'

export const Button = (
  { children, isLoading, onClick, primary, secondary, pd, fontSize, success },
  props
) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={isLoading}
      primary={primary}
      secondary={secondary}
      success={success}
      fontSize={fontSize}
      pd={pd}
      {...props}>
      <Content jc_c ai_c>
        {isLoading ? <Loader /> : children}
      </Content>
      <BaseSizeHelper jc_c ai_c>
        {children}
      </BaseSizeHelper>
    </ButtonStyled>
  )
}

const primaryStyles = css`
  color: ${({ theme: { bgColor } }) => bgColor};
  background: ${({ theme: { gradient } }) => gradient};
  
  &:hover,
  &:focus {
    /* box-shadow: ${({ theme: { primaryBoxShadow } }) => primaryBoxShadow}; */
  }
`

const successStyles = css`
${() => primaryStyles}
background: ${({ theme: { successColor } }) => successColor};
`

const secondaryStyles = css`
  color: ${({ theme: { disableColor } }) => disableColor};
  background: transparent;

  &:hover,
  &:focus {
    color: ${({ theme: { fontColor } }) => fontColor};
  }
`

const ButtonStyled = styled.button`
width: max-content;
  user-select: none;
  position: relative;
  ${({ pd }) =>
    pd
      ? css`
          padding: ${pd};
        `
      : null}

  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  transition: box-shadow 300ms ease, color 300ms ease;

  ${({ fontSize }) =>
    fontSize ? `font-size: ${fontSize}` : 'font-size: 1.2rem'};

  font-weight: 600;
  user-select: none;
  cursor: pointer;

  ${({ isLoading }) => isLoading && 'color:transparent;'}

  ${({ primary }) => (primary ? primaryStyles : null)} 
  ${({ secondary }) => (secondary ? secondaryStyles : null)}
  ${({ success }) => (success ? successStyles : null)}

`

const BaseSizeHelper = styled(FlexContainer)`
  opacity: 0;
`
const Content = styled(FlexContainer)`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
`