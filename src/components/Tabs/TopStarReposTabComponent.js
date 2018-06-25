import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';

class TopStarReposTab extends React.Component{
   

render(){
   
    return(
        <div>
            <textarea on id="TopStarReposTabTextPanel" value={this.props.state.TopStarReposTab} className="ScrollPanel"></textarea>
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
            dispatch({type:"ChangeTabData", data:data})
        }
    })
  )(TopStarReposTab);