import styled, { keyframes } from "styled-components"

export const IconBubblesAnimation = ({ icon: Icon }) => {    
    return <Container>
        <Icon/>
        <Icon/>
        <Icon/>
    </Container>
}

const bubbleAnimation =  ({maxHeight})=>keyframes`

0%{
    opacity: 0;

}

70%{
    opacity:100%
}

100%{
    transform: translateY(-${maxHeight}px);
    opacity:0;
}
`

const Container = styled.div`
position:relative;

svg{
    width:50px;
    height:50px;
    position:absolute;
    bottom:0;
}
svg:nth-child(1){
    animation: ${bubbleAnimation({maxHeight:10})} 1s ease forwards;
    /* transform: rotate(45deg); */
    /* left:25%; */
    
}
svg:nth-child(2){
    animation: ${bubbleAnimation({maxHeight:20})} 1s ease 100ms forwards;
    /* transform: rotate(85deg); */
    /* left:50%; */
    
}
svg:nth-child(3){
    animation: ${bubbleAnimation({maxHeight:30})} 1s ease 200ms forwards;
    /* transform: rotate(25deg); */
    /* left:75%; */

}
`