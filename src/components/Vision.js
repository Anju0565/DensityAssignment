import React from 'react'
import { ExploreButton, FeatureHeading, FeatureSpan, StepPage, StepText } from '../style/styles'
import vision from "../images/visionaries.png"
import mobView from "../images/mobview.png"
const Vision = () => {
  return (
    <StepPage><br /><br /><br /><br /><br /><br />
        <FeatureHeading>Meet the <FeatureSpan>Visionaries</FeatureSpan><br />behind Density.</FeatureHeading><br /><br /><br /><br /><br />
        <img src={vision} alt='visionaries' /><br /><br /><br /><br /><br /><br /><br /><br />
        <StepText style={{fontSize:"125px",fontWeight:"bolder"}}>Get started now.</StepText>
        <img src={mobView} alt='mobileView' style={{marginTop:"-4%",height:"1000px"}}/>
        <ExploreButton style={{width:"70%",height:"110px",fontSize:"30px",marginTop:"-18%"}}>Start Trading!</ExploreButton><br /><br /><br /><br /><br /><br /><br />
    </StepPage>
  )
}

export default Vision