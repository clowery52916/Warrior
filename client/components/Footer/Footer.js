import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: white;
  position: static;
  color:red;
  height:10vh;;
  width:100vw
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
