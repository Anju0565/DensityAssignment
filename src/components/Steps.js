import React from 'react'
import { Button, EarningHeading, EarningPage, ExploreNextBox, FeatureHeading, FeatureSpan, GridBox, GridItem, StepEarn, StepHeading, StepPage, StepText, StepTitle, Title } from '../style/styles'
import desc from "../images/desc.png";
import preview from "../images/earningPreview.png"
const Steps = () => {
  return (
    <StepPage>
        <ExploreNextBox>
            <StepText>Backed by the Best.</StepText>
        </ExploreNextBox>
        <GridBox>
            <GridItem>
                <img src='https://framerusercontent.com/images/gdlQdW3N8eoDMSSre2YDBWlb0k.png?scale-down-to=512' alt='imageLogo' height={"35px"} />
            </GridItem>
            <GridItem>
                <img src='https://framerusercontent.com/images/nGrdP5qcSxm5D1dyznCdkBdzIOg.png' alt='imageLogo' height={"90px"}  />
            </GridItem>
            <GridItem>
                <img src='https://framerusercontent.com/images/JOYn0YM4rICx1E6hEDjwkcrMvE.png' alt='imageLogo' height={"60px"} />
            </GridItem>
            <GridItem>
                <img src='https://framerusercontent.com/images/GMRDilBf7HwOCLQf2DZ9Sto2Odw.png?scale-down-to=512' alt='imageLogo' height={"60px"} />
            </GridItem>
            <GridItem>
                <img src='https://framerusercontent.com/images/D5tHrcjvRYsqPnKQXfnI5OGhuqg.png' alt='imageLogo' height={"120px"} />
            </GridItem>
            <GridItem>
                <img src='https://framerusercontent.com/images/R1yd7FnjlGT4CXTnOwsrjuB2FIg.png?scale-down-to=512' alt='imageLogo' height={"20px"} />
            </GridItem>
            <GridItem>
                <img src='https://framerusercontent.com/images/BbH8fkqxc8qzbaxXPGS41JL6aM.png?scale-down-to=512' alt='imageLogo' height={"40px"} />
            </GridItem>
        </GridBox><br /><br /><br /><br /><br /><br />
        <GridBox>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/S7gnqIa5oO1wJjpwWYQqFJ9uSk.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Utsav Somani</StepHeading>
                <StepTitle>Ex-partner, AngelList India</StepTitle>
            </GridItem>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/cnwgdmpSC4igd5roNpnIxEjHVc.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Aditya Nagarsheth</StepHeading>
                <StepTitle>Partner, Perpetual Value Partners</StepTitle>
            </GridItem>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/QuYqjHWGeAou3q2hUEQgwc4SrI8.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Gokul Rajaram</StepHeading>
                <StepTitle>Ex-board director, Coinbase | Ex-Google</StepTitle>
            </GridItem>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/jp0bxVAav0WU12Nb3W6DmlerX0.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Sajid Rehman</StepHeading>
                <StepTitle>Managing Partner, My Asia VC</StepTitle>
            </GridItem>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/okGvdVlM57X1Fxp3ww1dU8CQ.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Arjun Sethi</StepHeading>
                <StepTitle>Cofounder, Tribe Capital</StepTitle>
            </GridItem>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/29OS9pGoo6swnRGUemIZb4gBU.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Kunal Shah</StepHeading>
                <StepTitle>Founder, Cred</StepTitle>
            </GridItem>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/Q9di6CxfLs3k8dj4oZxFA8k3s.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Sandeep Nailawal</StepHeading>
                <StepTitle>Cofounder, Polygon Labs</StepTitle>
            </GridItem>
            <GridItem>
                <div>
                    <img src='https://framerusercontent.com/images/66Wk0yqKpU6iBv6LQqEYZugTrM.png?scale-down-to=512' alt='density-members' height={'140px'}/>
                </div>
                <StepHeading>Karn Vivek Nagpal</StepHeading>
                <StepTitle>Investor at CoinDCX, Dealshare, Oye Rickshaw!</StepTitle>
            </GridItem>
        </GridBox><br /><br /><br /><br /><br /><br />
        <EarningPage>
            <br /><br />
            <EarningHeading>Don’t take our word for it.</EarningHeading>
            <StepEarn>Hear it from our expert community of traders who have made<br /> insane amounts in a short amount of time</StepEarn>
            <img src={desc} alt='Description' height={'380px'}/><br /><br /><br /><br /><br />
            <Button>TRADE NOW</Button><br /><br /><br /><br /><br /><br />
        </EarningPage><br /><br /><br /><br /><br /><br />
        <img src='https://framerusercontent.com/images/7aKKvEZCSVRFsDSyHuluqzNp1RQ.png?scale-down-to=512' alt='logo' height={'180px'}/><br /><br /><br />
        <FeatureHeading>Earn Money. <FeatureSpan>The Easy Way. </FeatureSpan></FeatureHeading><br /><br />
        <Title>No Complexity of Trading Fee, generate volume and win</Title>
        <br /><br /><br />
        <img src={preview} alt='preview' /><br /><br /><br /><br /><br />
        <Button>START EARNING NOW</Button><br /><br /><br /><br /><br />
    </StepPage>
  )
}

export default Steps