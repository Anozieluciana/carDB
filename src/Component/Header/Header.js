import React,{useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from "react-icons/go"
import {GiCancel} from "react-icons/gi"
import {Link} from 'react-router-dom'

 const Header = () => {
    const [change, setChange] = useState(true)

    const Toggle  = () =>{
        setChange(!change)
    }



  return (
    <div>
        <Con>
            <Wrap>
              <Link to = "/">
              <Logo href="/" src='./Assets/logo.png'/>
              </Link>
                <Navs onClick={Toggle} change={change}>
                    <Nav to='/'>Home</Nav>
                    <Nav to='/about'>About</Nav>
                    <Nav to='/schedule'>Services</Nav>
                    <a href='tel:+2348121759954'>
                       <span>
                           <img src='./Assets/phone.png' alt=''/>
                   <button>Contact Us</button>
                   </span>      
                   </a>
                </Navs>  
                <MobileHold onClick={Toggle}>
                    {change ? (<GoThreeBars/>) : ( <GiCancel/>)}    
                </MobileHold>                           
            </Wrap>
        </Con>
    </div>
  )
}

export default Header 
const Con  = styled.div`
  height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    background:rgba(90,40,5,40%);
    align-items: center;
    position: fixed;
    top: 0;
    color: white;
    z-index:200;
    backdrop-filter: blur(10px);
`

const Wrap = styled.div`
    width:80%;
    height:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
  
`
const Logo = styled.img`
        height:150px;
        width:150px;
        object-fit: contain;
`

const Navs = styled.div`
    display:flex;
    width:480px;
     /* background-color:red; */
   justify-content:space-between;
   align-items:center;


   a{
       text-decoration: none;
   }
    
   button{
    width:130px;
    height:45px;
    border:none;
    background-color: #EF4D39;
    color:white;
    font-size:15px;
    font-weight:500;
    border-left:solid 2px black;
    border-radius: 0px 5px 5px 0px;
    font-family: poppins;
};
span{
    width:180px;
    background-color:#EF4D39;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:5px;
}
img{
    width:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    // height:45px;
    margin-left:7px;
   
}

@media screen and (max-width: 768px){
    display:flex;
    flex-direction:column;
    position: absolute;
    height: 80vh;
    width: 50%;
    top: 95px;
    justify-content:space-evenly;
    left: ${({change})=> (change? '-100%' : 0)};
        background-color: black;
        color: white;
        border-radius: 0px 10px 10px 0px;
        transition: all 900ms;

}
 
`

const Nav = styled(Link)`
        font-size:18px;
        font-weight:600;
        color: #fff;
    font-family: poppins;
    transform: scale(1.10);
    transition: all 500ms;

:hover{
    transform: scale(1.40);
    transition: all 500ms; 
    text-decoration: line-through;
}
`

const MobileHold = styled.div`
   display: none; 
   @media screen and (max-width: 768px){
    display:flex;
     
}
`
