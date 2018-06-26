import React from 'react';
import '../../index.css';
import {connect} from 'react-redux';
import {changetabaction} from "../../actions/actions"

class ContactsTab extends React.Component{
       
    tabBlocking=()=>{
        document.getElementById("ContactsTabTextPanel").disabled=!document.getElementById("ContactsTabTextPanel").disabled;
    }
    changeText=(event)=>{
        this.props.changetab({ContactsTab:event.target.value})
       
    }
   

render(){
   
    return(
        <div>
            <button   onClick={this.tabBlocking} className='button_edit'>edit</button>
            <textarea id="ContactsTabTextPanel" className='default_tabs' disabled onChange={this.changeText} >{this.props.state.ContactsTab}</textarea>
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
  )(ContactsTab);