import styled from "styled-components"
const Container = styled.div `
background-color:#FFA;
padding:50px;

`;

const Title = styled.h1 `
text-align:center;
margin-bottom:20px;
`;
const Desc = styled.p `
text-align:center;
margin-bottom:20px;
`;
const Input = styled.input `
padding:8px 12px;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
width:80%;
background-color:#fff;
`;
const InputContainer=styled.div`
text-align:center;
`;
const Btn = styled.button `
background-color:#3f51b5;
color:white;
padding: 8px 12px;
border:none;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
cursor:pointer;
`;
const Newsletter = () => {
    return (
        <div>
            <Container>
                <Title>SUBSCRIBE TO OUR NEWSLETTER</Title>
                <Desc>Never miss out on sales and deals</Desc>
                <InputContainer>
                <Input placeholder="Enter your email address"></Input>
                <Btn>ENROLL NOW</Btn>
                </InputContainer>
            </Container>
        </div>
    )
}

export default Newsletter
