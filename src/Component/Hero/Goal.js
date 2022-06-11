import React from 'react'
import styled from 'styled-components'
import {AiOutlineCheck} from 'react-icons/ai'

 const Goal = () => {
  return (
    <div>
        <Con>
            <Wrap>
                <We>
                    <span>
                        <Pic>
                    <AiOutlineCheck size='25px' />
                    </Pic>
                    <p>We're open to serve you</p>
                    </span>
                </We>

                <GoalHold>
                        <Vision>
                            <h2>Vision</h2>
                            <p>Our vision is to continue to grow our customer base which in turn will expand our 
business. We want to become the most trusted,  sought-after autopro and fleet
service center in the Nigeria and far beyond. We also want our customers to have
such confidence in and respect for how we manage our business that we will create only long term, win/win relationships.
 </p>
                        </Vision>
                        <Mission>

                            <h2>Mission</h2>
                            <p>Our mission is to earn our Customer's loyalty by delivering sales and service 
experiences with high quality, excellent value, integrity and enthusiasm. We will
 function as a team, work ethically, and focus on meeting and striving to exceed the
 expectations of our Clients.
</p>
                        </Mission>
                </GoalHold>
            </Wrap>
        </Con>
    </div>
  )
}


export default Goal

const Con = styled.div`
    height: auto;
    width:100%;
    display:flex;
    align-items: center;
    justify-content:center;

`

const Wrap = styled.div`
height: auto;
width:80%;
display:flex;
justify-content: space-between;
align-items:center;
flex-direction:column;
// background-color: pink;
margin-bottom: 20px
`

const We = styled.div`
    height: 70px;
    width:80%;
    background-color:#DFF0D8;
    justify-content:center;
    align-items:center;
    display:flex;
    backdrop-filter: blur(10px);
    margin-top: -70px;
    background:rgba(90,40,5,40%);
    background-color: white;
    opacity: 0.45;

    @media screen and (max-width:768px){
        height: 60px;
        margin-top: -60px;
        font-size: 13px;
        width: 90%;
    }
    @media screen and (max-width:768px){
        height: 50px;
        margin-top: -50px;
        font-size: 13px;
    }

    span{
        display:flex;
        align-items:center;
      
        // background-color: red;
     

    }

    img{
       height:30px;
       width:30px;

    }

    p{
        font-size:20px;
        font-weight:600;
        color:green;
        margin-left:30px;
        /* background-color: red; */
        font-family: poppins;

        @media screen and (max-width:768px){
      
        font-size: 17px;
        
    }
    @media screen and (max-width:380px){
      margin-left: 10px;
      font-size: 15px;
      /* background-color: red; */
    }

        
    }

 

   
`
const Pic = styled.div`
color: #fff;
height:50px;
width:50px;
background-color: green;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width:768px){
      height: 30px;
      width: 30px;
      font-size: 17px;
    }
`
const GoalHold = styled.div`
        width:100%;
        // height:500px;
        // background-color: blue;
        margin-top:50px;
        border: solid 2px #58141B;
        border-radius:2px;
        flex-wrap:wrap;
        padding-top: 10px;
        padding-bottom: 20px;
 
    

        
`

const Vision = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    
h2{
    color:  #EF4D39;
    font-weight:700;
    font-size:20px
}

p{
        width:75%;
        // text-align:center;
        font-size:18px;
        color:black;

        @media screen and (max-width:768px){
     text-align: center;

    }
    
    @media screen and (max-width:500px){
     font-size: 13px;
     
    }
    @media screen and (max-width:320px){
     font-size: 10px;
     
    }

}
`

const Mission = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


h2{
color: #EF4D39;
font-weight:700;
font-size:20px
}

p{
    width:75%;
    // text-align:center;
    font-size:18px;
    color:black;

    @media screen and (max-width:768px){
     text-align: center;

    }
    
    @media screen and (max-width:500px){
     font-size: 13px;
     
    }
    @media screen and (max-width:320px){
     font-size: 10px;
     
    }

}
`