import React from 'react'

import Promoted  from './Promoted'

import Promoted1  from './Promoted1'
import Promoted2 from './Promoted2';


class Notifications extends  React.Component{

    render()
    {
        return(
<div class="container">

<div class="jumbotron">

        <h1 class="text-center">Notification page</h1>

      </div>

  <div className="row">
          <div className="col-xs-4">

          <Promoted1/>


          </div>

          <div className="col-xs-4">

          <Promoted/>
     

          </div>
          

          <div className="col-xs-4">

         <Promoted2/>

            
          </div>

  </div>     

       

    <footer>

  

      <div class="row">

        <div class="col-lg-12">

          <span>

            <h5>Copy Right &cpy; &nbsp;&nbsp;&nbsp;&nbsp;</h5>&nbsp;

           

          </span>

        </div>

      </div>

  

  </footer>

  </div>


        )

    }

}

export default Notifications