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
width:25%;
padding:30px;
background-color:white;
`;
const Title=styled.h1``;
const Form=styled.form``;
const InnerForm=styled.div`
display:flex;
flex-direction:column;
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
margin-bottom:20px;
width:97%;
transition:all 0.5s;
&:hover{
    background-color:#F0C929;
}
`;
const Link =styled.a`
cursor:pointer;
margin:10px 0px;
font-size:12px;
text-decoration:underline;
color:#3f51b5;
`
;
const LinkContainer=styled.div`
text-align:center;
`;
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
margin-top:20px;
margin-right:10px;`;
const Login = () => {
    return (
        <div>
            <Container>
            <Wrapper>
                    <Title>LOGIN</Title>
                    <Form>
                    <InnerForm>
                        <Input placeholder="Username"/>
                        <Input placeholder="Password"/>
                    </InnerForm>
                    <br/><Btn>LOGIN</Btn><br/>
                    <LinkContainer>
                        <Link>FORGOT PASSWORD ? </Link><br/>
                        <Link>CREATE AN ACCOUNT</Link>
                        </LinkContainer>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Login
