import React from 'react';
import styled from 'styled-components';

function Promoted() {
  const PromotedStyles = styled.div`
    width: 380px;
    height: 440px;
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
    <div>
 <div >  

<img width ="100px" src={require('../images/download.jpeg')} />

<span className="MyLinkText">Our application page at FasterCapital has specific instructions such as ... and swot analysis,

 photos of the startup team including their LinkedIn profile.</span><br/>

<button className="btn btn-success" >view jobs</button>



</div>
<hr/>
<div >  

<img width ="100px" src={require('../images/1.jpeg')} />

<span className="MyLinkText">Our application page at FasterCapital has specific instructions such as ... and swot analysis,

 photos of the startup team including their LinkedIn profile.</span><br/>

<button className="btn btn-success">view jobs</button>



</div>
</div>
    </PromotedStyles>
  )
}

export default Promoted;