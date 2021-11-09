import styled from "styled-components"

const Container=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url("https://media.istockphoto.com/photos/close-up-of-colorful-tshirts-on-hangers-apparel-background-picture-id1170635789?b=1&k=20&m=1170635789&s=170667a&w=0&h=5CZtqZRGBRkQtZw3YIRotRDu4OROZPSkXeyzaMs-xYE=")center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
`;
const Wrapper=styled.div`
width:40%;
padding:30px;
background-color:white;
`;
const Title=styled.h1``;
const Form=styled.form``;
const InnerForm=styled.div`
display:flex;
flex-wrap:wrap;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;
`;
const Agreement=styled.span`
margin-top:20px;

`;
const Btn=styled.button`
border:none;
cursor:pointer;
color:black;
font-weight:600;
background-color:white;
border:2px solid #F0C929;
padding:8px 20px;
margin-top:20px;
transition:all 0.5s;
&:hover{
    background-color:#F0C929;
}
`;
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
margin-top:20px;
margin-right:10px;`;
const Register = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                    <InnerForm>
                        <Input placeholder="Full Name"/>
                        <Input placeholder="Username"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="Password"/>
                        <Input placeholder="Confirm Password"/>
                    </InnerForm>
                        <Checkbox/><Agreement>I attest I am an Indian National residing in India of the age 18 and above</Agreement>
                        <br/><Btn>CREATE AN ACCOUNT</Btn>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Register
