import { ArrowLeftOutlined, ArrowRightOutlined, NoEncryptionOutlined, SignalCellularConnectedNoInternet1Bar } from '@material-ui/icons'
import styled from 'styled-components'
import slide2 from '../assests/slider2.jpg'


const Container =styled.div `
width:100%;
display:flex;
overflow:hidden;
`

const Wrapper=styled.div`
width:100vw;
display:flex;
align-items:center;
margin-top:20px;

`
const Slide=styled.div`
width:300vw;
position:relative;
`;
const ImgCont=styled.div `
flex:1;

`;
const SlideContent=styled.div `
flex:1;
position:absolute;
top:150px;
color:white;
right:3.47%;`;
const Title=styled.h1`
font-size:70px;`;
const Desc=styled.p`
font-size:30px`;
const Btn=styled.button`
cursor:pointer;
background-color:#F0C929;
border:none;
margin-top:20px;
font-weight:600;
border-radius:2px;
padding:8px 20px;`;
const Img=styled.img`
width:100%; 
height:501.938px;
`;



const Slider = () => {
   
    return (
        <div>
        <Container>
       
        <Wrapper >
             <Slide>
                <ImgCont>
                  <Img src={slide2}/>
                  
                </ImgCont>
                <SlideContent> 
                <Title>FALL SALE</Title>
                 <Desc>CLOTHES AS LOW AS INR 200</Desc>
                 <Btn>SHOP NOW</Btn>
                </SlideContent>
            </Slide> 
            </Wrapper>
           
        </Container>
        </div>
    )
}

export default Slider
