import React from 'react'
import styled from 'styled-components'

 const Services = () => {
  return (
    <>
        <Con>
            <Des>AutoPro Services</Des>
            <Wrap>
                
                <Hold1>
                    <Box1><p>Merchanical Repair</p></Box1>
                    <img src='./Assets/mechanic.webp' alt=''/>
                    <Text>AutoproFranzee service cares
about the environment . because
we live here too and it is our 
responsibility to keep you safe.
to be eco friendly we give you the
best mercedes servicing </Text>
<button>Contact Us</button>
                </Hold1>

                <Hold2>
                    <Box1><p>Mercedes Sales</p></Box1>

                    <img src='./Assets/roadside.jpg' alt=''/>
                    <Text>AutoproFranzee service cares
about the environment . because
we live here too and it is our 
responsibility to keep you safe.
to be eco friendly we give you the
best mercedes servicing </Text>
<button>See More</button>
                </Hold2>

                <Hold1>
                    <Box1><p>Evaluation Services</p></Box1>
                    <img src='./Assets/roadside.jpg' alt=''/>
                    <Text>AutoproFranzee service cares
about the environment . because
we live here too and it is our 
responsibility to keep you safe.
to be eco friendly we give you the
best mercedes servicing </Text>
<button>Contact Us</button>
                </Hold1>
                
            </Wrap>
        </Con>
    </>
  )
}

export default Services
const Des = styled.div`
font-family: poppins;
font-size: 25px;
`

const Con = styled.div`
    height: 100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#C9D1E0;
    margin: 30px 0;
    flex-direction: column;
    padding-top: 40px;

`

const Wrap = styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 40px 0 ;
    flex-wrap:wrap;

    @media screen and (max-width: 768px){
    justify-content: center;
    align-items: center;
    /* background-color: red; */
}


`

const Hold1 = styled.div`
        height:460px;
        width: 470px;
        background-color:white;
        display:flex;
        flex-direction:column;
        border-radius:5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        flex-direction:column;
        /* margin:10px; */
        padding-bottom: 15px;

        button{
            width:130px;
            height:45px;
            border:none;
            background-color: #EF4D39;
            color:white;
            font-size:15px;
            font-weight:500;
            // border-left:solid 2px black;
            border-radius:5px;
            align-self:center;
            /* margin-top:5px; */
           
        }

img{
    height:40%;
    width:100%;
    object-fit:cover;
}

@media screen and (max-width: 768px){
    width: 100%;
   margin-top: 20px;
  
}

`

const Box1 = styled.div`
    height: 15%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    /* background-color: red; */
    text-align: center;
    
    p{
    font-weight:900;
    font-size:20px;
    font-family: poppins;
    
   
    @media screen and (max-width: 768px){
    text-align: center;
   font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
  
}
}


    
`

const Text = styled.div`  
height:30%;
font-family: poppins;
color: gray;
display:flex;
font-weight:400;
font-size:15px;
padding-right: 10px;
padding-left: 10px;
text-align:center;
margin-top: 20px;
@media screen and (max-width: 768px){
  margin-top: 10px;
  
}
@media screen and (max-width: 430px){
  font-size: 15px;
  
}
`


const Hold2 = styled.div`
padding-bottom: 15px;
        height:460px;
        width: 470px;
        background-color:white;
        display:flex;
        flex-direction:column;
        border-radius:5px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        flex-direction:column;
        /* margin-top:50px ; */
        // border:solid 1px gray;
    padding-left: 10px;
    padding-right: 10px;

        button{
            width:130px;
            height:45px;
            border:none;
            background-color: #EF4D39;
            color:white;
            font-size:15px;
            font-weight:500;
            // border-left:solid 2px black;
            border-radius:5px;
            align-self:center;
            margin-top:5px;
            
        }

img{
    height:40%;
    width:100%;
    object-fit:cover;
}

@media screen and (max-width: 768px){
    width: 100%;
  margin-top: 20px;
  
}
`

