
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container=styled.div``;
const Wrapper=styled.div``;
const Title=styled.h1`
padding:20px;
text-align:center;
`;
const Top=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;
const TopButton=styled.button `
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type === "filled" && "none"};
background-color:${(props)=>props.type === "filled" ? "black" : "transparent"};
color:${(props)=>props.type === "filled" && "white"}

`;
const Bottom=styled.div`
display:flex;
justify-content:space-between;
padding:20px;
`;
const Sections=styled.div``;
const Product=styled.div`
padding:20px;
${'' /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */}
margin:20px 0px;
`;

const ProductDetails=styled.div`
flex:3;
`;
const Details=styled.div`
display:flex;

`;
const Img=styled.img`
width:200px;

`;
const ImgCont=styled.div`
flex:1;`;
const Name=styled.p`
margin-bottom:20px;
font-size:20px;
`;
const Id=styled.p`
margin-bottom:20px;
font-size:20px;
`;
const Size=styled.p`
margin-bottom:20px;
font-size:20px;
`;
const Price=styled.p`
margin-top:20px;
font-size:20px;
`;
const Info=styled.div`
flex:3;
`;
const Summary=styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:60vh;
margin-left:20px;
`;
const Hr=styled.hr`
color:rgb(0 0 0 / 0.2);
`;
const Text=styled.span`
text-decoration:underline;
cursor:pointer;
margin:0 10px;
`;
const SummaryTitle=styled.h1`
font-weight:100;

`;
const SummaryItem=styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type ===" total" && "500"};
font-size:${props=>props.type === "total" && "24px"}
`;
const SummaryItemText=styled.span`

`;
const SummaryItemPrice=styled.span`

`;
const Btn=styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;
`;
const Cart = () => {
    return (
        <div>
            <Container>
            <Announcement/>
            <Navbar/>
             <Wrapper>
             <Title>YOUR BAG</Title>
             <Top>
                 
                 <TopButton>CONTINUE SHOPPING</TopButton>
                 <Sections>
                 <Text>Shopping Bag(2)</Text>
                 <Text>Your Wishlist(2)</Text>
                 </Sections>
                 <TopButton type="filled">CHECKOUT NOW</TopButton>
             </Top>
             <Bottom>
                 <Info>
                 <Product>
                     <Details>
                     <ImgCont>
                     <Img src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b3V0Zml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
                     </ImgCont>
                     <ProductDetails>
                     <Name><b>Product : </b> All White Duo Set</Name>
                     <Id><b>Product ID: </b>830248</Id>
                     <Size><b>Size : </b>M</Size>
                     </ProductDetails>
                     </Details>
                     <Price>
                        <b> Price:</b> 400 INR
                     </Price>
                 </Product>
                 <Hr/>
                 <Product>
                     <Details>
                     <ImgCont>
                     <Img src="https://images.unsplash.com/photo-1594632019379-421c5c70bf54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"/>
                     </ImgCont>
                     <ProductDetails>
                     <Name><b>Product : </b>Hi RoseGold Slip tee</Name>
                     <Id><b>Product ID: </b>830249</Id>
                     <Size><b>Size : </b>S</Size>
                     </ProductDetails>
                     </Details>
                     <Price>
                        <b> Price:</b> 600 INR
                     </Price>
                 </Product>
                 </Info>
                 <Summary>
                     <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                     <SummaryItem>
                         <SummaryItemText>Subtotal</SummaryItemText>
                         <SummaryItemPrice>200 INR</SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem>
                         <SummaryItemText>Estimated Shipping</SummaryItemText>
                         <SummaryItemPrice>70 INR</SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem>
                         <SummaryItemText>Shipping Discount</SummaryItemText>
                         <SummaryItemPrice>-30 INR</SummaryItemPrice>
                     </SummaryItem>
                     <SummaryItem type="total">
                         <SummaryItemText >Total</SummaryItemText>
                         <SummaryItemPrice>270 INR</SummaryItemPrice>
                     </SummaryItem>
                     <Btn>CHECKOUT NOW</Btn>
                 </Summary>


             </Bottom>
             </Wrapper>
            <Footer/>
            </Container>
        </div>
    )
}

export default Cart
