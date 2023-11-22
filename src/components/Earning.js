import React from 'react'
import { AccountCreate, AccountFlex, Button, EarningFlex, EarningHeading, EarningPage, ExplorePage, FeatureDescription, FeatureHeading, FeatureSpan } from '../style/styles'
import earning from "../images/earning.png"
import coin from "../images/coin.png"
const Earning = () => {
  return (
    <EarningPage>
        <br /><br /><br />
        <EarningHeading>Start Small. Earn Big.</EarningHeading><br /><br /><br />
        <EarningFlex>   
            <img src={earning} alt='Earning Tips' width={'80%'}/> 
        </EarningFlex><br /><br /><br /><br />
        <ExplorePage><br /><br /><br /><br />
          <FeatureHeading>Derivates made simple <br />in <FeatureSpan>3 Easy </FeatureSpan>Steps</FeatureHeading><br /><br /><br /><br />
          <AccountCreate>
            <img src='https://framerusercontent.com/images/JOp5o95H8N6rcRdm2ihCJpcoawc.png?scale-down-to=1024' alt='logo' height={"450px"} />
            <AccountFlex>
              <img src='https://framerusercontent.com/images/Eirp07s7Wsvd04ENgTUIQE6RGkc.png' alt='logo' height={'120px'}/>
              <FeatureHeading style={{fontSize:"40px",fontWeight:"500",marginTop:"-5%"}}>Create an<br /> Account</FeatureHeading>
              <FeatureDescription style={{fontSize:"22px"}}>Register & Complete your<br /> Verification in less than 2 minutes</FeatureDescription>
              <Button style={{width:"60%"}}>TRADE NOW</Button><br /><br /><br /><br />
            </AccountFlex>
          </AccountCreate>
          <AccountCreate>
            <img src={'https://framerusercontent.com/images/j11NwUrp3bk9vGxAZEp1xEsSGrk.png'} alt='logo' height={"450px"} />
            <AccountFlex>
              <img src={coin} alt='logo' height={'120px'}/>
              <FeatureHeading style={{fontSize:"40px",fontWeight:"500",marginTop:"-5%"}}>Add Funds <br /> Seamlessly</FeatureHeading>
              <FeatureDescription style={{fontSize:"22px"}}>Add funds quickly using a variety of<br /> payment methods</FeatureDescription>
              <Button style={{width:"60%"}}>TRADE NOW</Button><br /><br /><br /><br />
            </AccountFlex>
          </AccountCreate>
          <AccountCreate style={{borderBottom:"none"}}>
            <img src='https://framerusercontent.com/images/yT2IeAMzpz2zotDCFRXIz6bngLA.png' alt='logo' height={"450px"} />
            <AccountFlex>
              <img src='https://framerusercontent.com/images/MuGoyAYXtzuANxB4L6sjutODqss.png' alt='logo' height={'120px'}/>
              <FeatureHeading style={{fontSize:"40px",fontWeight:"500",marginTop:"-5%"}}>Start your<br /> Trading Journey</FeatureHeading>
              <FeatureDescription style={{fontSize:"22px"}}>Choose Your Trading Pair & Trade<br /> Seamlessly</FeatureDescription>
              <Button style={{width:"60%"}}>TRADE NOW</Button>
            </AccountFlex>
          </AccountCreate>
        </ExplorePage>
    </EarningPage>
  )
}

export default Earning