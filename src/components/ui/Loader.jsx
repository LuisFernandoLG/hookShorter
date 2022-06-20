import styled, { keyframes } from 'styled-components'

export const Loader = ({ medium }) => {
  return (
    <LoaderStyled medium={medium}>
      <span className="loader"></span>
    </LoaderStyled>
  )
}

const rotate = keyframes`
  0% {
    transform: rotate(0); }
  100% {
    transform: rotate(360deg);
    
    }`

const LoaderStyled = styled.div`
  font-size: ${({ medium }) => medium ? '30px' : null};
  height: 0.9em;
  width: 0.9em;
  color: inherit;
  position: relative;
  display: inline-block;
  border: 0.1em solid;
  border-radius: 20rem;
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`