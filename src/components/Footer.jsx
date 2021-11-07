import styled from "styled-components"

const Container=styled.div`
padding:30px;
margin-top:40px;
`;
const Wrapper=styled.div`
display:flex;
justify-content:space-between;
`;
const Title=styled.h2`
margin-bottom:20px;
`;
const About=styled.div`
flex:2;
margin-right:30px;
`;
const Styles=styled.div`
flex:1;
`;
const Policies=styled.div`
flex:1;
`;
const Locations=styled.div`
flex:1;

`;
const Copyright=styled.small`
margin-bottom:30px;`;
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
`;
const ListItem=styled.li`
margin:10px 0px;
`;
const Footer = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                  <About><Title>ABOUT US</Title>Thrifty Citrus is a thrift store for women clothing. We sell second hand clothes for affordable pricing</About>
                  <Styles>
                  <Title>ITEMS</Title>
                      <List>
                          <ListItem>Sets</ListItem>
                          <ListItem>Dresses</ListItem>
                          <ListItem>Accessories</ListItem>
                      </List>
                  </Styles>
                  <Policies>
                      <Title>POLICIES</Title>
                      <List>
                          <ListItem>Terms and Conditions</ListItem>
                          <ListItem>Privacy Policy</ListItem>
                          <ListItem>Disclosure Policy</ListItem>
                      </List>
                  </Policies>
                  <Locations>
                      <Title>LOCATIONS</Title>
                      <List>
                          <ListItem>Chennai</ListItem>
                          <ListItem>Bangalore</ListItem>
                          <ListItem>Hyderabad</ListItem>
                      </List>
                  </Locations>
                </Wrapper>
                <Copyright>All Image credits to respective owners.<br/> This is a Project Coded by Everly Precia Suresh</Copyright>
            </Container>
        </div>
    )
}

export default Footer
