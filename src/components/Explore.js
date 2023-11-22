import React from 'react'
import { ExplorePage, FeatureHeading, FeatureSpan, ExploreImage, Title, Button, ExploreButton, ExploreNext, ExploreNextBox, ExploreInnerBox } from '../style/styles'

const Explore = () => {
  return (
    <ExplorePage><br /><br /><br /><br />
        <FeatureHeading>Explore the Markets<br /> like it is your<FeatureSpan> Playground.</FeatureSpan></FeatureHeading><br /><br />
        <Title>Search for your favorite coins and stay ahead of the market</Title>
        <ExploreImage>
        <img src={'https://framerusercontent.com/images/ZUq27rij30rWKD5jwP4U3m3q0c.png'} alt='trade view'/>
        </ExploreImage><br /><br /><br />
        <ExploreButton>EXPLORE MARKETS</ExploreButton>
        <ExploreNext>
            <FeatureHeading><FeatureSpan>Unlock </FeatureSpan>New Frontiers.</FeatureHeading><br /><br />
            <Title>Are you a stock trader looking for new opportunities to make<br /> money? We got you covered!</Title>
            <ExploreNextBox>
                <ExploreInnerBox>Same<br /> Strategies</ExploreInnerBox>
                <ExploreInnerBox>Same<br /> Indicators</ExploreInnerBox>
                <ExploreInnerBox>Better<br /> Leverage</ExploreInnerBox>
                <ExploreInnerBox>24x7<br /> Trading</ExploreInnerBox>
            </ExploreNextBox>
            <video width={'50%'} autoPlay={true} loop={true}>
                <source src='https://framerusercontent.com/assets/x7FNsNavKW3WzdAZRc41VOl7Qw.mp4' type='video/mp4' />
            </video>
        </ExploreNext>
        <Button>TRADE NOW</Button><br /><br /><br /><br /><br /><br />
    </ExplorePage>
  )
}

export default Explore