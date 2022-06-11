import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"

 const Slider = () => {
  return (
    <div>
        <Con>
            
            <Wrap>
            <Test>Mercedes Collection</Test>
            <TestHold>
                <Hold1>
                    <img src='./Assets/redview.png' alt=''/>
                    <Text>Mercedes Hot Red</Text>
                   
                </Hold1>
                <Hold1>
                    <img src='./Assets/car.png' alt=''/>
                    <Text>Benz Sport</Text>
                   
                </Hold1>
                <Hold1>
                    <img src='./Assets/ash.png' alt=''/>
                    <Text>Ash Spark</Text>
                   
                </Hold1>
                
                </TestHold>
                <ButHold  href='/car'>
              <button onClick={()=>{}}>See More</button>
              </ButHold>
               
            </Wrap>
           
        </Con>
    </div>
  )
}

export default Slider

const ButHold = styled.a`

`

const Con = styled.div`
        height:auto;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin: 60px 0;
      
`

const Wrap = styled.div`
        width:80%;
        // height:450px;
        // background-color:pink;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        button{
            width:130px;
            height:45px;
            border:none;
            background-color: #EF4D39;
            color:white;
            font-size:15px;
            font-weight:500;
            // border-left:solid 2px black;
            border-radius: 5px;
        }
`

const Text = styled.div`
height:30%;
width:100%;
display:flex;
justify-content:center;
    align-items:center;
    font-weight:700;
        font-size:20px;
        color:#EF4D39;

`

const Hold1 = styled.div`
    height:300px;
    width: 300px;
    // background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    object-fit:cover;

    img{
        height:100%;
        width:100%;

    }
`

const Test = styled.div`
        margin-bottom:20px;
        font-weight:700;
        font-size:25px;
`
const TestHold = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
flex-wrap:wrap;
margin:5px

`
