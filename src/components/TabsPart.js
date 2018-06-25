import React from 'react';
import '../index.css';
import {connect} from 'react-redux';

 class TabsPart extends React.Component{
       
    switchtab= (event)=>{
        document.getElementById("first_tab").className="button_emphasis_none";
        document.getElementById("second_tab").className="button_emphasis_none";
        document.getElementById("third_tab").className="button_emphasis_none";
        document.getElementById(event.target.className).className="button_emphasis";
        this.props.changetab(event.target.className,this.props.state[event.target.className])
        document.getElementById("TextArea").value=this.props.state[this.props.state.currenttab];
        
    }

   handletab=(event)=>{
     
        this.props.changetab(this.props.state.currenttab,event.target.value);
      
    }
   textediting=(event)=>{
      document.getElementById("TextArea").disabled=!document.getElementById("TextArea").disabled;
       
    }
    render(){
               return(
            <div className="tabs_part">
                <div className="button_panel">
                    <div className="button_block"> <input type="button" value="Основное" className="first_tab" onClick={this.switchtab}/> 
                    <hr className="button_emphasis" id="first_tab"/>
                     </div>
                    <div className="button_block"><input type="button" value="Образование" className="second_tab" onClick={this.switchtab}/>
                     <hr className="button_emphasis_none" id="second_tab"/> 
                     </div>
                    <div className="button_block"><input type="button" value="Контакты" className="third_tab" onClick={this.switchtab}/>
                     <hr className="button_emphasis_none" id="third_tab"/>
                      </div>
                    <input type="button" value="edit" className="button_edit" onClick={this.textediting} /> 
                </div>
                
                {  <textarea className="tab_text" id="TextArea" disabled onChange={this.handletab}/> } 
            </div>
        )
    }

}

export default connect(
    state=>({
     state:state.TabsReducer
              
    }),
    dispatch =>({
        changetab: (cu,text) =>{
            dispatch({type:"ChangeTaCt", ct:cu , txt:text})
        }
    })
  )(TabsPart);