




     const initialTabsState = {
       BasicTab:'',
       EducationTab:'',
       ContactsTab:'',
       FollowersTab:'',
       ReposTab:'',
       OrgsTab:'',
       TopStarReposTab:'',
       TopGrowingTab:'',
       User:{avatar_url:"", name:"none",login:"none",bio:"none",company:"none",location:"none",email:"none",blog:"none"}
   
}
  
 const TabsReducer = function(state = initialTabsState, action) {
   

    switch(action.type){
      case'USER_FETCH_SUCCEEDED':
          return Object.assign({},state,{User:action.user});

      case'REPOS_FETCH_SUCCEEDED':
        let text='';
        action.data.map(item=>{text=text+item.name+'\n';})
        return(Object.assign({},state,{ReposTab:text}));

      case'ChangeTabData':
        return Object.assign({},state,action.data);

      case'ORGS_FETCH_SUCCEEDED':
        let textorgs='';
        action.data.map(item=>{textorgs=textorgs+item.name+'\n';})
        return(Object.assign({},state,{OrgsTab:textorgs}));

      case "FOLLOWS_FETCH_SUCCEEDED":
        let textfollows='';
        action.data.map(item=>{textfollows=textfollows + item.login+'\n';})
        return(Object.assign({},state,{FollowersTab:textfollows}));
      
        case "TOPPOPULAR_FETCH_SUCCEEDED":
        let texttoppopular='';
        action.data.items.map(item=>{texttoppopular=texttoppopular+item.name+'\n';})
        return(Object.assign({},state,{TopStarReposTab:texttoppopular}));
      
        case "TOPGROWING_FETCH_SUCCEEDED":
        let texttopgrowing='';
        action.data.items.map(item=>{texttopgrowing=texttopgrowing+item.name+'\n';})
        return(Object.assign({},state,{TopGrowingTab:texttopgrowing}));

        default:
      return state;

    }
  }



      export default TabsReducer;
