import styled from "styled-components"

export const Icon = ({ icon: IconComponent, size }) => {
  return (
    <Container size={size}>
      <IconComponent />
    </Container>
  )
}

const Container = styled.div`
  width: ${({size}) => size || '50px'};
  height: ${({size}) => size || '50px'};
  svg {
    width: 100%;
    height: 100%;
  }
`
