import React from 'react'
import { FooterDescription, FooterNav, FooterPage, NavItemList } from '../style/styles'
import logo from "../images/footerLogo.png"

const Footer = () => {
  return (
    <FooterPage><br /><br />
        <img src={logo} alt='logo' />
        <FooterNav>
            <NavItemList>Privacy Policy</NavItemList>
            <NavItemList>Trading Policy</NavItemList>
            <NavItemList>Terms & Conditions</NavItemList>
            <NavItemList>Cookie Policy</NavItemList>
            <NavItemList>KYC-AML Policy</NavItemList>
            <NavItemList>Risk disclosure</NavItemList>
            <NavItemList>Research Disclaimer</NavItemList>
        </FooterNav>
        <FooterDescription>Density was started with the vision of democratising money for everyone. With the idea of derivatives made simple, use<br /> Density to maximise profits and a hassle free experience.</FooterDescription>
    </FooterPage>
  )
}

export default Footer