import styled from 'styled-components'

const Container =styled.div`
height:30px;
background-color:#3f51b5;
color:white;
text-align:center;
padding:5px;
`

const announcement = () => {
    return (
        <div>
            <Container>Thrift clothes for an affordable price!</Container>
        </div>
    )
}

export default announcement
