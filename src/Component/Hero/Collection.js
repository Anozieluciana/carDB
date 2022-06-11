import React from 'react'
import styled from 'styled-components'

 const Collection = () => {
  return (
    <div>
        <Con>
      
            <Wrap>
             
            <Box>
                <Texty>Mercedes Repairer And Purchase services In Lagos, Nigeria</Texty>
                <p>Frankzee AutoPro Services</p>
                    </Box>

                    <Hold>
                <Box1>
                    <Text>
                    Autofranzee  auto Textrofessional is focused on
giving you the best quality services at little cost
we’re focused on mercedes repaires, mercedes
repairer and even issues like proffessional 
mercedes servicing. 
                    </Text>
                    <Text1>Call it professionalism ?</Text1>

                    <Text>we are good to go, with great team and experts
at your services, and not just that we’ve got the
best machinary that gives us ease to detect 
your auto faults. having some minor issues like 
heating bonet...etc... be open to consult us, we 
are open to profer solution.. why? because the
safety of our esteemed customer’s is our 
optimal pririoty. 
</Text>
<button>Contact Us</button>
                </Box1>

                <Box2>
                    <img src='./Assets/mechanic.webp' alt=''/>
                </Box2>
                </Hold>
            </Wrap>
        </Con>
    </div>
  )
}


export default Collection

const Con = styled.div`
    width:100%;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 20px 0;
    padding-top: 30px;
    padding-bottom: 20px;
`

const Wrap = styled.div`
    width: 80%;
    /* height: auto; */
    // background-color: blue;
    display: flex;
    align-items: center;
   justify-content: space-between;
   justify-content:center;
   align-items:center;
   flex-direction: column;
   
   @media screen and (max-width: 460px){
       width: 95%;
   }
 
`

const Box2 = styled.div`
width: 50%;
// background-color: blue;
height: 490px;
object-fit:cover;

img{
   
    height:100%;
    width:100%;
    border-radius:10px;
}
@media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 20px;
}
`

const Box = styled.div`
    width: 100%;
    display:flex;
   justify-content: center;
    align-items:center;
    flex-direction:column;
   

    p{
        font-weight:700;
        font-size:20px;

        @media screen and (max-width: 460px){
      font-size: 17px;
        
    }
        
    }
    @media screen and (max-width: 460px){
        width: 95%;
        text-align:center;
        
    }
`

const Texty = styled.div`
font-weight:700;
font-size:25px;
margin-top:25px;
text-align:center;
font-family: poppins;
`

const Box1 = styled.div`
    width: 48%;
    /* height: 30px; */
    background-color: white;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    display: flex;
 
    button{
        background-color:#EF4D39;
        color:white;
        font-weight:500;
        font-size:15px;
        border:none;
        height:50px;
        border-radius: 5px;
        width:150px;
        margin-top:20px;

     
    }
    @media screen and (max-width: 768px){
      display: flex;
        justify-content: center;
        width: 100%;
    align-items:center;
    margin-bottom: 20px;
    }
`

const Text = styled.div`
font-weight:400;
font-size:15px;
margin-top:15px;
font-family: poppins;

@media screen and (max-width: 460px){
        width: 90%;
        text-align: center;
       
        
    }

`

const Text1 = styled.div`
color: #EF4D39;
font-weight:500;
margin-top:15px;
font-family: poppins;
font-size: 17px;
`

const Hold = styled.div`
width:100%;
height: auto;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
// margin:5px;
@media screen and (max-width: 768px){
    diplay:flex;
    align-items: center;
    flex-direction: column-reverse;
    }
@media screen and (max-width: 460px){
    diplay:flex;
    align-items: center;
       
        
    }
`