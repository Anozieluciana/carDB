import React from 'react'
import styled from 'styled-components'

 const Hero = () => {
  return (
    <>
    <Container>
    
      <Wrapper>
     
        <TextHold>
            <L>
            <Look>Autofranzee Repairer And<br/> Purchase Services</Look>
            <Line/>
            </L>

           
            <PHold>
            <P1>. Car purchases services</P1>
            <P2>. Amazing Mercedes Repairer services</P2>
            <P3>. Amazing Mercedes Repairer services</P3>
            </PHold>
            <ButHold>
              <But >Schedule services</But>
            </ButHold>
           
        </TextHold>
       
      </Wrapper>
    
    </Container>
    <Over/>
    </>
  )
}

export default Hero

const Over = styled.div`
background:black;
opacity: 50%;
position: relative;
`
const ConPic = styled.img`
object-fit: cover;

`


const TextHold = styled.div`
width: 100%;
margin-top: 120px;
`
const L = styled.div`

`
const Look = styled.div`
font-size: 30px;
font-family: poppins;
color:white;
font-weight: 900;

@media screen and (max-width: 430px){
  font-size: 25px;
}
@media screen and (max-width: 430px){
  font-size: 22px;
}
@media screen and (max-width: 375px){
  font-size: 18px;
}
`
const Line = styled.div`
width: 100px;
background-color:  #EF4D39;
border-radius: 10px;
height: 5px;
`
const PHold = styled.div`
margin-top: 30px;

@media screen and (max-width: 430px){
 margin-top: 20px;
}
`
const P1 = styled.div`
color: white;
font-family: poppins;
font-size: 20px;
@media screen and (max-width: 430px){
  font-size: 16px;
}
`
const P2 = styled.div`
color: white;
font-family: poppins;
font-size: 20px;
@media screen and (max-width: 430px){
  font-size: 16px;
}
`
const P3 = styled.div`
color: white;
font-family: poppins;
font-size: 20px;
@media screen and (max-width: 430px){
  font-size: 16px;
}
`
const ButHold = styled.div`
margin-top: 20px;
`
const But = styled.div`
width:170px;
height:45px;
border:none;
background-color: transparent;
color:white;
font-size:15px;
font-weight:500;
border-radius: 5px;
justify-content: center;
align-items:center;
display:flex;
font-family: poppins;
border: 3px solid #EF4D39;
cursor: pointer;
:hover{
  background-color: #EF4D39;
  border: solid 2px white;
}

@media screen and (max-width: 430px){
  width: 150px;
  font-size: 13px;
}
@media screen and (max-width: 375px){
 width: 140;
}
@media screen and (max-width: 320px){
 width: 130;
}
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url('./Assets/carr.jpg');
background-position: center;
background-repeat: no-repeat;
/* padding: 90px 0 0 0; */
height: 95vh;
background-size: cover;


@media screen and (max-width: 768px){
height: 70vh;
}
`

const Wrapper = styled.div`
  width: 80%;
  /* background-image: url(./Assets/whiteb.png); */
  background-position: center;
  background-repeat: no-repeat;
background-size: 100%;
  /* background-color: red; */
  height: 100%;


`