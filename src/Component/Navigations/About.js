import React, {useEffect} from 'react'
import styled from 'styled-components'
import Foter from '../Hero/Foter'
import Collection from '../Hero/Collection'
import { Link } from 'react-router-dom'
import Team from './Team'

const About = () => {

  return (
    <>
        <Con >
        <ConWrap>
              <Wrap>
              <Look>Autofranzee Repairer And Purchase Services</Look>
              <Contact to='/schedule'>Book Appointment</Contact>
              </Wrap>
          </ConWrap>
        </Con>
        <Collection/>
        <Team/>
    </>
  )
}

export  default About
const Contact = styled(Link)`
text-decoration: none;
width:180px;
height:55px;
border:none;
background-color: transparent;
color:white;
font-size:17px;
font-weight:500;
border-radius: 5px;
justify-content: center;
align-items:center;
display:flex;
font-family: poppins;
border: 3px solid #EF4D39;
cursor: pointer;
margin-top: 50px;
:hover{
  background-color: #EF4D39;
  border: solid 2px white;
}
`
const Look = styled.div`
font-family: poppins;
font-size: 35px;
font-weight: 900;
color: #fff;
/* width: 300px; */
@media screen and (max-width: 786px){

  text-align: center;
}
`
const Con = styled.div`
background:url('./Assets/repair.avif') repeat fixed 100%;
background-position:center;
background-repeat:no-repeat;
background-size: cover;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

const ConWrap = styled.div`
// height: ;
background-color: rgba(0,0,0,0.150px);
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`
const Wrap = styled.div`
/* height: 200px;  */
/* margin-top: 200px; */
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
