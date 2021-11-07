import { FavoriteBorderOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
const Container=styled.div``;
const Wrapper=styled.div`
padding:30px;
display:flex;
justify-content:space-between;
margin-top:20px;
`;
const ImgCont=styled.div`
flex:1`;
const Image=styled.img`
width:80%;
`;
const InfoCont=styled.div`
flex:1;`;
const Title=styled.h1``;
const Desc=styled.p`
margin-top:30px;`;
const Price=styled.p`
margin-top:30px;
font-weight:bold;
font-size:20px;
`;
const FilterContainer =styled.div `
display:flex;
justify-content:space-between;
margin-top:30px;
margin-bottom:40px;
`;

const Filter =styled.div ``;
const Input=styled.select `
padding:10px;
margin-right:10px;

`;
const FilterContent=styled.span`
margin-right:20px;
`;
const Btn=styled.button`
width:70%;
margin-top:30px;
background-color:#fff;
border:3px solid #3f51b5;
padding:8px;
border-radius:10px;
font-weight:bold;
display:flex;
align-items:center;
justify-content:center;
transition: all 0.5s;
cursor:pointer;
&:hover{
    background-color:#3f51b5;
    color:white;
}
`;
const Option=styled.option``;
const Product = () => {
    return (
        <div>
            <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgCont>
                    <Image src="https://images.unsplash.com/photo-1594632019379-421c5c70bf54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
                </ImgCont>
                <InfoCont>
                    <Title>Tee and shorts Duo set</Title>
                    <Desc>A Duo set consisting of a silky faded pink tee and a white above the knee shorts. The set was wore only thrice before </Desc>
                    <Price>Rs 800 (Free Shipping)</Price>
                    <FilterContainer>
                    <Filter>
                    <FilterContent>Select a Size : </FilterContent>
                    <Input required>
                      <Option disabled selected>Select a Size</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                    </Input>
                    </Filter>
                    </FilterContainer>
                    <Btn>Add to Cart <ShoppingCartOutlined style={{marginLeft:20}}/></Btn>
                    <Btn>Add to wishlist<FavoriteBorderOutlined style={{marginLeft:20}}/></Btn>
                </InfoCont>
                
            </Wrapper>
            <Newsletter/>
            <Footer/>
            </Container>
        </div>
    )
}

export default Product
