import React from 'react'
import styled from 'styled-components'
import{categories} from '../data'
import CategoryItem from './CategoryItem';
const Container=styled.div`
display:flex;
padding:30px;
justify-content:space-between;
`;
const Title =styled.h1`
text-align:center;
margin-top:30px;
margin-bottom:30px;
`;
const Categories = () => {
    return (
        <div>
            <Container>
            
             {categories.map(item=>
             (
                 <CategoryItem item={item} key={item.id}/>
             ))}
            </Container>
            <Title>BEST SELLERS</Title>
        </div>
    )
}

export default Categories
