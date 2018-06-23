import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var searchUserInfo = {
    avatar_url:"",
    name:"none",
    login:"none",
    bio:"none",
    company:"none",
    location:"none",
    email:"none",
    blog:"none"

}
var currentContacts={};

class SearchInfo extends React.Component{
    render(){
        return(
            <div>
                
                <img className="avatar_url" alt="" src={this.props.data.avatar_url }></img>
                <p className="name">{this.props.data.name}</p>
                <p className="login">{this.props.data.login}</p>
                <p className="bio">{this.props.data.bio}</p>
                <hr className="hr_line"/>
                <div className="company_line"> <i className="fa fa-users" aria-hidden="true"></i> <p className="company">{this.props.data.company}</p></div>
                <div className="marker_line"><i className="fa fa-map-marker " aria-hidden="true"></i><p className="location">{this.props.data.location}</p></div>
                <div className="email_line"><i className="fa fa-envelope" aria-hidden="true"></i><a className="email" src={this.props.data.email}>{this.props.data.email}</a></div>
                <div className="blog_line"><i className="fa fa-retweet" aria-hidden="true"></i><a className="blog" src={this.props.data.blog}>{this.props.data.blog}</a></div>
            </div>
        );
    }
}

class SearchAndShowPart extends React.Component{
    constructor(){
        super();
        this.state={currentInfo:searchUserInfo}
    }
    handlesearch= (event)=>{
       
         let searchitem=document.getElementById("input_area").value;
       
         console.log(searchitem);
         fetch('https://api.github.com/users/' + searchitem).then(
        (response => {if (response.status >= 200 && response.status < 400) {
                return response.json();
       }
        })).then(user => {

              currentContacts={
                avatar_url:user["avatar_url"],
                name:user["name"],
                login:user["login"],
                bio:user["bio"],
                company:user["company"],
                location:user["location"],
                email:user["email"],
                blog:user["blog"]
                       }
        })
       .catch(() => {
        console.log("Something error");
       });

       for (var key in currentContacts){
           if(currentContacts[key]===""){
               currentContacts[key]="none";
           }

       }

        this.setState({
            currentInfo:currentContacts
        });
       // this.handlesearch();
    }

    render(){
        return(
            <div className="search_user_window">
                <input type="text" id="input_area"  />
                <input type="button" value="Search" className="button_search" onClick={this.handlesearch}/>
                               
                <SearchInfo data={this.state.currentInfo} />
                
            </div>
        )
    }
}

class Editpart extends React.Component{
    currenttab="first_tab";
   
    constructor(){
        super();
        this.state={first_tab:"",
                    second_tab:"",
                    third_tab:""
                
                }
    }
    stateVariable={};
    changetab= (event)=>{
        document.getElementById("first_tab").className="button_emphasis_none";
        document.getElementById("second_tab").className="button_emphasis_none";
        document.getElementById("third_tab").className="button_emphasis_none";
        this.currenttab=event.target.className;
        
        let text=document.getElementsByClassName("tab_text");
        text.value=this.state[this.currenttab];
        document.getElementById(this.currenttab).className="button_emphasis";
        this.setState(this.stateVariable);
    }
    handletab=(event)=>{
        this.stateVariable=this.state;
        this.stateVariable[this.currenttab]=event.target.value;
        
        this.setState(this.stateVariable);
    }
    textediting=(event)=>{
       document.getElementById("TextArea").disabled=!document.getElementById("TextArea").disabled;
      //  console.log(document.getElementsByClassName("tab_text").disabled=);
    }
    render(){
        return(
            <div className="tabs_part">
                <div className="button_panel">
                    <div className="button_block"> <input type="button" value="Основное" className="first_tab" onClick={this.changetab}/> <hr className="button_emphasis" id="first_tab"/> </div>
                    <div className="button_block"><input type="button" value="Образование" className="second_tab" onClick={this.changetab}/> <hr className="button_emphasis_none" id="second_tab"/> </div>
                    <div className="button_block"><input type="button" value="Контакты" className="third_tab" onClick={this.changetab}/> <hr className="button_emphasis_none" id="third_tab"/> </div>
                    <input type="button" value="edit" className="button_edit" onClick={this.textediting} /> 
                </div>
                <textarea className="tab_text" id="TextArea" value={this.state[this.currenttab] } disabled onChange={this.handletab}/>
            </div>
        )
    }

}


class MainWindow extends React.Component{
render(){
    return(
        <div className="main_window">
        <SearchAndShowPart />
        <Editpart/>
        </div>
    )
}
}

ReactDOM.render(
    <MainWindow/>,
    document.getElementById("root")
)