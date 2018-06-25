import React from 'react';
import '../index.css';
import {connect} from 'react-redux';


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
        if(searchitem!==""){
        this.props.changeuser("https://api.github.com/users/"+searchitem);
         this.props.changefollows("https://api.github.com/users/"+searchitem+'/followers');
         this.props.changeorgs("https://api.github.com/users/"+searchitem+'/orgs');
         this.props.changerepos("https://api.github.com/users/"+searchitem+'/repos');
         this.props.changetoppopular('https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=5');
         this.props.changetopgrowing('https://api.github.com/search/repositories?q=trending%3A%3E0&sort=stars&per_page=5&since=weekly&#39');
        }
        else{alert("Заполните поле поиска")}

       console.log(this.props.state);
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
        changeuser: (link) =>{
            dispatch({type:"ChangeUser", link:link})
        },
        changerepos: (link) =>{
            dispatch({type:"ChangeRepos", link:link})
        },
        changefollows: (link) =>{
            dispatch({type:"ChangeFollows", link:link})
        },
        changeorgs: (link) =>{
            dispatch({type:"ChangeOrgs", link:link})
        },
        changetab: (data) =>{
            dispatch({type:"ChangeTabData", data:data})
        },
        changetoppopular: (link) =>{
            dispatch({type:"ChangeTopPopular", link:link})

        },
        changetopgrowing: (link) =>{
            dispatch({type:"ChangeTopGrowing", link:link})

        }

        
    })
    
  )(SearchPart);