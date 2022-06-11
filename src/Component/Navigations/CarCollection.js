import React from 'react'
import styled from 'styled-components'

 const CarCollection = () => {
  return (
    <>
        <Container>
                
      <Title>Autofranzee Mercedes Collection</Title>
            <Wrap>
                
                <Handler>
                    <Card>
                        <Des src='./Assets/redview.png'/>
                        <Info>Autofranzee Mercedes Collection</Info>
                    </Card>
                </Handler>
            </Wrap>
        </Container>
    </>
  )
}


export default CarCollection
const Title = styled.div`
    font-size:2rem;
`

const Container = styled.div`
margin-top: 30px;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;

`

const Wrap = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:pink;
`

const Handler = styled.div`
    display:grid;
    grid-template-column: repeat(3, minmax(0, 1fr));
    grid-gap:50px;
    width: 95%;
    margin-bottom: 30px;
`
const Des = styled.img`
width:100%;
height: 300px;
object-fit:cover;
`

const Card = styled.div`
width: 500px;
height: 330px
`

const Info = styled.div`
    margin-top:-4px;
`
