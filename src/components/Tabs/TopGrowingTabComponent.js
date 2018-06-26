import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';

class TopGrowingTab extends React.Component{
   

render(){
   
    return(
        <div>
            <textarea on id="TopGrowingTabTextPanel" value={this.props.state.TopGrowingTab} className="ScrollPanel"></textarea>
        </div>


    );
}
}

export default connect(
    state=>({
     state
          
    })
  )(TopGrowingTab);