import React from 'react';
import styled from 'styled-components';

function Promoted1() {
  const PromotedStyles = styled.div`
    width: 280px;
    height: 240px;
    border: 1px solid #CACCCE;
    padding: 0;
    margin: 0 15px;
    background-color: #FFFFFF;
    box-shadow: -2px 4px #D0D3D6;

    h1 {
      float: left;
      margin 15px 15px;
      color: #CACCCE;
    }
  `;

  return (
    <PromotedStyles className='promoted'>


    <img src={require('../images/icon.png')}/>
 
    </PromotedStyles>
  )
}

export default Promoted1;