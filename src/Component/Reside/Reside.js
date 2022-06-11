import React from 'react'
import Hero from '../Hero/Hero'
import Collection from '../Hero/Collection'
import Slider from '../Hero/Slider'
import Goal from '../Hero/Goal'
import styled from 'styled-components'
import Services from '../Hero/Services'
import WhatsApp from '../Hero/Whatsap'
import Slide from '../Hero/Slide'

 const Reside = () => {
  return (
    <Contain>
        <Hero/>
        <Goal/>
        <Collection/>
        <WhatsApp/>
        {/* <Slider/> */}
        <Services/>
        <Slide/>
  </Contain>

  )
}


export default Reside

const Contain = styled.div`
  width:100%;
`