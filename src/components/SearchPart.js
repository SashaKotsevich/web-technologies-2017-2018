import React from 'react';
import '../index.css';
import {connect} from 'react-redux';
import request from '../api.js';

class Icon extends React.Component{
    render(){
        return(
        <i className={this.props.clname} aria-hidden="true"></i>
        );
    }
}

class SearchInfo extends React.Component{
    render(){
        return(
            <div>
                
                <img className="avatar_url" alt="" src={this.props.data.User.avatar_url }></img>
                <p className="name">{this.props.data.User.name}</p>
                <p className="login">{this.props.data.User.login}</p>
                <p className="bio">{this.props.data.User.bio}</p>
                <hr className="hr_line"/>
                <div className="company_line"> <Icon clname="fa fa-users"/> <p className="company">{this.props.data.User.company}</p></div>
                <div className="marker_line"><Icon clname="fa fa-map-marker "/><p className="location">{this.props.data.User.location}</p></div>
                <div className="email_line"><Icon clname="fa fa-envelope" /><a className="email" src={this.props.data.User.email}>{this.props.data.User.email}</a></div>
                <div className="blog_line"><con clname="fa fa-retweet" /><a className="blog" src={this.props.data.User.blog}>{this.props.data.User.blog}</a></div>
            </div>
        );
    }
}




class SearchPart extends React.Component{
  
    handlesearch= (event)=>{
       
       //get userinfo 
        let searchitem=document.getElementById("UserNameTextArea").value;
        document.getElementsByClassName("company_line")[0].value="biba";
        this.props.searchRequest(searchitem);

        //get folovers
        if(document.getElementById("UserNameTextArea").value!==""){
            request("https://api.github.com/users/"+document.getElementById("UserNameTextArea").value+"/followers").then((data) => {
                let text=''; 
                 data.map(item=>{text=text+item.login+'\n'; })
                this.props.changetab({FollowersTab:text});})
                .catch((e) => {alert("User Not Found"); })
                }
           else{alert("Заполните поле ввода логина"); }
        //get repositories
        if(document.getElementById("UserNameTextArea").value!==""){
            request("https://api.github.com/users/"+document.getElementById("UserNameTextArea").value+"/repos").then((data) => {
                let text=''; 
                 data.map(item=>{text=text+item.name+'\n'; })
                this.props.changetab({ReposTab:text});})
               
                }
           
        
        //get organisations
        if(document.getElementById("UserNameTextArea").value!==""){
            request("https://api.github.com/users/"+document.getElementById("UserNameTextArea").value+"/orgs").then((data) => {
                let text=''; 
                 data.map(item=>{text=text+item.name+'\n'; })
                this.props.changetab({OrgsTab:text});})
                
                }
          



            
    }

    render(){
        return(
            <div className="search_user_window">
                <input type="text" id="UserNameTextArea"  />
                <input type="button" value="Search" className="button_search" onClick={this.handlesearch}/>
                               
                <SearchInfo data={this.props.state} />
                
            </div>
        )
    }
}

  export default connect(
    state=>({
      state
          }),
   

    dispatch =>({
        searchRequest: (user) =>{
            request("https://api.github.com/users/"+user)
                    .then(({avatar_url, name, login, bio, company, location, email, blog, followers_url, repos_url, organizations_url}) => {
                        dispatch({
                            type: 'ChangeTabData',
                            data:{
                            User: {
                                avatar_url: avatar_url,
                                name: name,
                                nickname: login,
                                bio: bio,
                                job: company,
                                location: location,
                                email: email,
                                link: blog,
                                foll: followers_url,
                                rep: repos_url,
                                org: organizations_url
                            }}
                        })
                    })
                    .catch((e) => {
                        // dispatch({type: 'user_not_found'})
                    })
        },
        changetab: (data) =>{
               dispatch({type:"ChangeTabData", data:data})
        }
    })
    
  )(SearchPart);