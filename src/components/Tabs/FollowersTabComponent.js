import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';
import {changetabaction} from "../../actions/actions"

class FollowersTab extends React.Component{
   

render(){
   
    return(
        <div>
            <textarea on id="FollowersTabTextPanel" className="ScrollPanel"value={this.props.state.FollowersTab}></textarea>
        </div>


    );
}
}

export default connect(
    state=>({
     state
          
    }),
    dispatch =>({
        changetab: (data) =>{
            dispatch(changetabaction)
        }
    })
  )(FollowersTab);