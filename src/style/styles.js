import styled from "styled-components";

export const NavBar = styled.div`
    margin: auto;
    width: 100%;
    height: 89px;
    padding: 24px, 216px, 24px, 216px;
    border: 0px, 0px, 1px, 0px;
    gap: 387px;
    background-color: #08130a;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
`;

export const Logo = styled.div`
    width: 12%;
    margin-left: 4%;
    margin-top: 2%;
`;

export const NavItem = styled.div`
    width: 40%;
    color: whitesmoke;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NavItemList = styled.div`
&:hover{
    color: #d4f938;
    cursor: pointer;
}
`;

export const Button = styled.button`
color: black;
padding: 14px 32px;
background-image: linear-gradient(to right, #d4f938,#45db6d);
border: none;
border-radius: 10px;
font-size: 15px;
font-weight: bolder;
&:hover {
    color: black;
    box-shadow: 0px 0px 12px #d4f938;
    cursor: pointer;
  }
`;

export const HomePage = styled.div`
    /* min-height: 350px; */
    background-color: black;
`

export const Heading = styled.div`
    font-size: 90px;
    color: whitesmoke;
    font-weight: bold;
    letter-spacing: -4.19px;
` 

export const Span = styled.span`
    color: #d4f938;
    text-shadow: 0 0 16px #d4f938;
`

export const Title = styled.div`
    color: whitesmoke;
    font-size: 24px;
`

export const FlexBox = styled.div`
    margin: auto;
    margin-top: 3%;
    width: 30%;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 6%;
`

export const ImageBox = styled.div`
    margin: auto;
    margin-top: 6%;
    height: 668px;
    width: 1033px;
    display: flex;
    justify-content: center;
`
export const ImageDiv = styled.div`
    border: 2px solid whitesmoke;
    border-radius: 38px;
`
// export const Image = styled.img`
//     border: 1px solid whitesmoke;
//     border-radius: 30px;
// `
export const OverLapImage = styled(Image)`
    margin-left: -30px;
    position: relative;

`

export const Firstimage = styled(Image)`
    margin-left: -30px;

`

export const TradeCount = styled.div`
    margin: auto;
    height: 170px;
    width: 80%;
    margin-top: 8%;
    margin-bottom: 4%;
    display: flex;
    justify-content: space-evenly;
    color: #868686;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 0 5px #d4f938;
    border-radius: 14px;
    align-items: center;
`

export const TradeBox = styled.div`
    /* border-right: none; */
`

export const TradeText = styled.div`
     font-size: 40px;
     font-weight: bold;
     background: #d4f938;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const TradeBorder = styled.div`
    display: inline-block;
    border-left: 1px solid #d4f938;
    margin: 0 10px;
    height: 60px;
`

export const FeaturePage = styled.div`
    margin-top: -5%;
`
export const FeatureHeading = styled.span`
    color: whitesmoke;
    font-size: 70px;
    font-weight: bold;
`
export const FeatureSpan = styled.span`
    color: #d4f938;
    text-shadow: none;
`
export const FooterPage = styled.div`
    margin: auto;
    margin-top: 4%;
    height: 300px;
    width: 100%;
    background-color: #229751;
`
export const FooterNav =styled(NavItem)`
    margin: auto;
    margin-top: 3%;
    width: 90%;
    justify-content: space-evenly;
`
export const FooterDescription = styled.div`
    margin-top: 2%;
    color: #d9dbda;
    font-size: 14px;
`
export const FeatureDescription = styled.div`
    margin: 4% 0 10% 0;
    color: #6f6f6f;
    font-size: 17px;
`
export const ExplorePage = styled.div`
    background-color: black;
`
export const ExploreImage = styled.div`
    margin-top: 5%;
    background-color: #020702;
`
export const ExploreButton = styled(Button)`
    box-shadow: 0 0 15px #d4f938;
`
export const ExploreNext = styled.div`
    margin-top: 16%;
    margin-bottom: 5%;
`

export const ExploreNextBox = styled.div`
    margin: auto;
    margin-top: 5%;
    margin-bottom: 8%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    border-image: linear-gradient(0.25turn, rgb(4,4,4), rgb(66,66,66), rgb(4,4,4));
    border-image-slice: 1;
    width:90%;
    height: 150px;
`
export const ExploreInnerBox = styled.div`
    color: whitesmoke;
`
export const EarningPage = styled.div`
    background-color: whitesmoke;
`
export const EarningHeading = styled(FeatureHeading)`
    color: black;
`
export const EarningFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const EarningFlexBox = styled.div`
    background-color: white;
`
export const StepPage = styled.div`
    color: whitesmoke;
`
export const StepText = styled.div`
    font-size: 70px;
    font-weight: bold;
    background: linear-gradient(#ffffff,#5d5d5d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const GridBox = styled.div`
    margin: auto;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(4,30%);
    grid-row-gap: 15%;
    grid-column-gap: 4%;
    align-items: center;
    justify-content: center;
    text-align: justify;
` 

export const GridItem = styled.div`
    text-align: center;
    /* height: 40px;
    width: 40%; */
    /* object-fit: fill; */
`
export const StepHeading = styled(FeatureHeading)`
    color: whitesmoke;
    font-size: 22px;
    font-weight: bold;
`
export const StepTitle = styled(FeatureDescription)`
    font-size: 14px;
`
export const StepEarn = styled.div`
    margin-top: 2%;
    margin-bottom: 6%;
    font-size: 26px;
    color: black;
`
export const AccountCreate = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: start;
    width: 75%;
    margin-bottom: 8%;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(0.25turn, rgb(4,4,4), rgb(66,66,66), rgb(4,4,4));
    border-image-slice: 1;
`
export const AccountFlex = styled.div`
    margin: auto;
    display: grid;
    align-items: center;
    text-align: start;
`

export const AccountBorder = styled.div`
    display: inline-block;
    border-left: 1px solid #d4f938;
    margin: 0 10px;
    height: 60px;
`