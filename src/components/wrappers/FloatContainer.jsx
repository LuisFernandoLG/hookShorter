import styled from 'styled-components'

export const FloatContainer = ({ right, left, top, bottom, children, zIndex }) => {
  return (
    <StyledFloatContainer right={right} left={left} top={top} bottom={bottom} zIndex={zIndex}>
      {children}
    </StyledFloatContainer>
  )
}

const StyledFloatContainer = styled.div`
  
  position: absolute;
  ${({ top }) => (top ? `top:${top};` : null)}
  ${({ right }) => (right ? `right:${right};` : null)}
  ${({ bottom }) => (bottom ? `bottom:${bottom};` : null)}
  ${({ left }) => (left ? `left:${left};` : null)}
  ${({ zIndex }) => (zIndex ? `z-index:${zIndex};` : 'z-index: 300;')}
`
