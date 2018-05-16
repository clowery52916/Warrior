import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: white;
  position: static;
  color:black;
  height:10vh;;
  width:100vw
  font-family:'Oswald', sans-serif; font-size:14px; line-height:0; font-weight:400; letter-spacing:8px; text-transform: uppercase; color:black;
`

const Footer = () => (
  <FooterContainer>
    <p>Address</p>
    <firstheader class='first'>
      <form>
        <input id="searchbox" type="text" placeholder="Search..." required/>
          <input id="searchbtn" type="button" value="Search"/>
      </form>
    </firstheader>
  </FooterContainer>
);

export default Footer;
