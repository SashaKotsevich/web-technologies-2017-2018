import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';
import {changetabaction} from "../../actions/actions"

class BasicTab extends React.Component{
       
    tabBlocking=()=>{
        document.getElementById("BasicTabTextPanel").disabled=!document.getElementById("BasicTabTextPanel").disabled;
    }
    changeText=(event)=>{
        this.props.changetab({BasicTab:event.target.value})
       
    }
    putStartValue=(event)=>{
        event.target.value=this.state.BasicTab;
        console.log("2");
    }

render(){
   
    return(
        <div>
            <button   onClick={this.tabBlocking} className="button_edit">edit</button>
            <textarea id="BasicTabTextPanel" className="default_tabs" disabled onChange={this.changeText} >{this.props.state.BasicTab}</textarea>
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
            dispatch(changetabaction(data))
        }
    })
  )(BasicTab);