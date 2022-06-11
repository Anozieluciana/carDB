import React from 'react'
import styled from 'styled-components'

 const Foter = () => {
  return (
    <>
        <Con>
            <Wrap>
                <Box1>
                    <Card1> <Logo>Autofrankz</Logo>
                    <Text>Sure plug for auto professionalism,we are here for you always</Text></Card1>
                    <Card2>   <Contact>Contact Us</Contact>
                        <Adres>Address:<a> lekki road lagos nigeria</a></Adres>
                        <Pho>Tel:<a href='tel'>08121759954</a></Pho>
                        <Pho>Careline:<a href='tel'>08121759954</a></Pho>
                        <Email>Email<a href='anoziechidera@gmail.com'>08121759954</a></Email>
                        <Open>Opening:<a>8:00-19:00 wat mon-sat</a></Open> </Card2>
                </Box1>
                <Box2>
                <Card1>
                <Contact>Information</Contact>
                        <Adres>About Us</Adres>
                        <Pho>Mechanics</Pho>
                        <Email>Payment</Email>
                        <Open>Direction</Open>

                </Card1>
                    <Card2>
                    <Contact>Company</Contact>
                        <Adres>Adresses</Adres>
                        <Pho>Details</Pho>
                        <Email>Best Sales</Email>
                        <Open>Direction</Open>
                    </Card2>
                    
                </Box2>
            </Wrap>
        </Con>
      
    </>
  )
}

export default Foter
const Logo = styled.div`
font-family: poppins;
color: white;
font-weight: 900;
font-size: 20px;
`
const Text = styled.div`
display: flex;
margin-top: 20px;
color: white;
`
const Contact = styled.div`
font-family: poppins;
color: white;
font-weight: 900;
font-size: 20px;
`
const Pho = styled.div`
display: flex;
margin-top: 20px;
color: white;
a{
    color: white;
    margin-left: 8px;
    text-decoration: none;
    text-transform: inherit;
}
`
const Adres = styled.div`
margin-top: 15px;
color: white;

a{
    color: white;
    margin-left: 2px;
    text-decoration: none;
    text-transform: inherit;
}
`
const Email = styled.div`
display: flex;
margin-top: 15px;
color: white;

a{
    color: white;
    margin-left: 2px;
    text-decoration: none;
    text-transform: inherit;
}
`
const Open=styled.div`
display: flex;
margin-top: 15px;
color: white;
a{
    color: white;
    /* margin-left: 8px; */
    text-decoration: none;
    text-transform: inherit;
}
`
const Con = styled.Con = styled.div`
width: 100%;
/* height: 500px; */
background-color: #606677;
padding-bottom: 40px;
padding-top: 20px;
display: flex;
justify-content: center;
padding-bottom: 70px;
/* z-index: 1000; */
/* position: absolute; */
bottom: 0;
`
const Wrap = styled.div`
width: 80%;
flex-wrap: wrap;
display: flex;
/* background-color: pink; */
/* align-items: center; */
justify-content: space-between;

@media screen and (max-width: 865px){
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: pink; */
}
`
const Box1 = styled.div`
width: 49%;
/* background-color: white; */
display: flex;
justify-content: space-between;
flex-wrap: wrap;

@media screen and (max-width: 765px){
    width: 100%;
  
}
`
const Card1= styled.div`
width: 48%;
/* background-color: blue; */
@media screen and (max-width: 765px){
 width: 49%;
}
`
const Card2 = styled.div`
width: 48%;
/* background-color: blue; */
@media screen and (max-width: 765px){
 width: 49%;
}
`
const Box2 = styled.div`
width: 49%;
/* background-color: white; */
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media screen and (max-width: 765px){
    width: 100%;
    margin-top: 20px;
}
`