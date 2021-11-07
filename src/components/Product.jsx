import { FavoriteBorderOutlined, OpenInNewOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
margin:5px;
min-width:250px;
height:350px;
position:relative;
`;
const Image=styled.img`
height:75%;
width:100%;
cursor:pointer;
`;
const Info=styled.div`
display:flex;
justify-content:space-evenly;
margin-top:5px;
position:absolute;
bottom:85px;
cursor:pointer;
width:100%;
transition:0.5s;
${Container}:hover & {
    opacity:0.5;
    background-color:black;
  }
padding:5px 0px;
opacity:0;

`;
const Icon=styled.div``;
const Product = ({item}) => {
    return (
        <div>
            <Container>
                <Image src={item.img}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined style={{color:"white"}}/>
                    </Icon>
                    <Icon>
                        <OpenInNewOutlined style={{color:"white"}}/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined style={{color:"white"}}/>
                    </Icon>
                </Info>
            </Container>
        </div>
    )
}

export default Product
