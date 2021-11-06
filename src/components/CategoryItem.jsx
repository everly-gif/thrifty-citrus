import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
color:black;
flex:1;
margin:2px;
height:70vh;
position:relative;
`;
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover`;
const Content=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title=styled.h1`
color:white;
margin-bottom:8px;
`;
const Btn=styled.button`
border:none;
cursor:pointer;
color:black;
font-weight:600;
background-color:white;
border:2px solid #F0C929;
padding:8px 20px;`

const CategoryItem = ({item}) => {
    return (
        <div>
            <Container>
             <Image src={item.img}/>
                 <Content>
                     <Title >{item.title}</Title>
                     <Btn>Shop Now</Btn>
                 </Content>
            </Container>
        </div>
    )
}

export default CategoryItem
