import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
const Container = styled.div`
height:60px;
`
const Wrapper=styled.div`
 padding:20px 20px;
 display:flex;
 justify-content:space-between;
 align-items:center;
`
const Left=styled.div`
flex:1;
font-size:24px;
font-weight:bold;`
const Center=styled.div `
flex:2;
`
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`

const SearchContainer=styled.div `
border-radius:10px;
display:flex;
justify-content:space-evenly;
align-items:center;
padding:8px;
background-color:#F0C929;
`
const Input =styled.input`
width:90%;
border:none;
border-radius:10px;
padding:5px;
`
const MenuItem =styled.div`
cursor:pointer;
margin-left:30px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>THRIFTY CITRUS.</Left>
                <Center>
                <SearchContainer className="search">
                    <Input />
                    <Search/>
                </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>
                     <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlined/>
                     </Badge>

                    </MenuItem>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
