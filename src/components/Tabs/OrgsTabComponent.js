import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';

class OrgsTab extends React.Component{
   

render(){
   
    return(
        <div>
            <textarea on id="OrgsTabTextPanel" value={this.props.state.OrgsTab} className="ScrollPanel"></textarea>
        </div>


    );
}
}

export default connect(
    state=>({
     state
          
    })
   
  )(OrgsTab);