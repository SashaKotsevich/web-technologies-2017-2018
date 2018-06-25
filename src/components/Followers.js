import React from 'react';
import '../index.css';
import {connect} from 'react-redux';
import request from '../api.js';
class FollowersPart extends React.Component{

    reload=(event,count)=>{
        this.props.FollowersRequest(document.getElementById("input_area").value);
        let text=' ';
        this.props.state.FollowersReducer.map(item=>{
                text=text+item+'\n';
        })
       
        document.getElementById("ShowFollovers").value=text;
      
    }
   

    render(){
        
        return(
             <div>
                 <button onClick={this.reload}>Load</button>
                 <text>Пока по кнопке нужно нажать пару раз связано с временем запроса потом поправлю :)</text>
                <textarea id="ShowFollovers"  className="ScrollPanel"></textarea>
             </div>

        )
    }

}



export default connect(
    state=>({
      state
          }),
   

    dispatch =>({
        FollowersRequest: (user) =>{
            request("https://api.github.com/users/"+user+"/followers")
                    .then((user) => {
                        dispatch({
                            type: 'Follow_Rqst',
                            data: user
                        })
                    })
                    .catch((e) => {
                        dispatch({type: 'user_not_found'})
                    })
        }
    })
  )(FollowersPart);