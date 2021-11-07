
import styled from 'styled-components'
import { popular_products } from '../data'
import Product from './Product';
const Container =styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
padding:30px;
flex-wrap:wrap;`;

const Products = () => {
    return (
        <div>
           <Container>
               {popular_products.map(item=>(
                   <Product item={item} key={item.id}/>
               ))}
           </Container> 
        </div>
    )
}

export default Products
