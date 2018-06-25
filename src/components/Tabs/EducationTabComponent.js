import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';

class EducationTab extends React.Component{
       
    tabBlocking=()=>{
        document.getElementById("EducationTabTextPanel").disabled=!document.getElementById("EducationTabTextPanel").disabled;
    }
    changeText=(event)=>{
        this.props.changetab({EducationTab:event.target.value})
       
    }
  

render(){
   
    return(
        <div>
            <button   onClick={this.tabBlocking} className="button_edit">edit</button>
            <textarea id="EducationTabTextPanel" className="default_tabs" disabled onChange={this.changeText} >{this.props.state.EducationTab}</textarea>
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
  )(EducationTab);