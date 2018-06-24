import React from 'react';
import '../index.css';
import {connect} from 'react-redux';
import request from '../api.js';



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


class SearchPart extends React.Component{
  
    handlesearch= (event)=>{
       
        
        let searchitem=document.getElementById("input_area").value;
        document.getElementsByClassName("company_line")[0].value="biba";
        
       this.props.searchRequest(searchitem);
     
    }

    render(){
        return(
            <div className="search_user_window">
                <input type="text" id="input_area"  />
                <input type="button" value="Search" className="button_search" onClick={this.handlesearch}/>
                               
                <SearchInfo data={this.props.state.SearchReducer} />
                
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
            request(user)
                    .then(({avatar_url, name, login, bio, company, location, email, blog, followers_url, repos_url, organizations_url}) => {
                        dispatch({
                            type: 'Srch_Rqst',
                            data: {
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
                            }
                        })
                    })
                    .catch((e) => {
                        dispatch({type: 'user_not_found'})
                    })
        }
    })
  )(SearchPart);