import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';

class RepositoriesTab extends React.Component{
   

render(){
   
    return(
        <div>
            <textarea on id="RepositoriesTabTextPanel"value={this.props.state.ReposTab} className="ScrollPanel"></textarea>
        </div>


    );
}
}

export default connect(
    state=>({
     state
          
    })
  )(RepositoriesTab);