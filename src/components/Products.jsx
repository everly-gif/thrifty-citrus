
import styled from 'styled-components'
import { popular_products } from '../data'
import Product from './Product';
const Container =styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
padding:30px;
flex-wrap:wrap;`;
const Title =styled.h1`
text-align:center;
margin-top:30px;
`;
const Products = () => {
    return (
        <div>
        <Title>BEST SELLERS</Title>
           <Container>
               {popular_products.map(item=>(
                   <Product item={item} key={item.id}/>
               ))}
           </Container> 
        </div>
    )
}

export default Products
