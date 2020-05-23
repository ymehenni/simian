import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
align-items: center;
`

const Block = styled.div`
background: #222;
border-radius: 5px;
padding: 5px`

const Title = styled.h1`
color: black;
font-size:16px; 
font-weight: 600;`

const SubTitle = styled.span`
color: #222;
font-size: 16px;
font-weight: 400;
opacity: 0.7;
margin: 0px, 5px,0px, 5px
`


export const DropdownBlock = ({title, subText, isDropped, children}) => {
    const [display, setDisplay] = useState(isDropped)
return <Wrapper>
    <Title>{title}</Title> : {subText? <SubTitle>{subText}</SubTitle>: null}
   {isDropped?<Block>{console.log(children, isDropped, subText, title)}</Block>:null}
    </Wrapper>
}