import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container =styled.div `
`;
const  Title =styled.h1 `
margin:30px;
`;
const FilterContainer =styled.div `
display:flex;
justify-content:space-between;
margin:30px;
`;
const FilterContent=styled.span`
margin-right:20px;
`;
const Filter =styled.div ``;
const Input=styled.select `
padding:10px;
`;
const Option=styled.option``;
const CategoryProducts = () => {
    return (
        <div>
            <Container>
                <Announcement/>
                <Navbar/>
                <Title>Items</Title>
                <FilterContainer>
                    <Filter><FilterContent>Filter Products By</FilterContent>
                    <Input>
                      <Option disabled selected>Select a Size</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                    </Input>
                    </Filter>
                    <Filter><FilterContent>Sort Products By</FilterContent>
                    <Input>
                      <Option disabled selected>Select an option</Option>
                      <Option>Pricing</Option>
                      <Option>Best Sellers</Option>
                      <Option>Newest</Option>
                    </Input></Filter>
                </FilterContainer>
                <Products/>
                <Newsletter/>
                <Footer/>
            </Container>
        </div>
    )
}

export default CategoryProducts
