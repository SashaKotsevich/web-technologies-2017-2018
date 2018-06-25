


// const initialSearchState = {
//         avatar_url:"",
//         name:"none",
//         login:"none",
//         bio:"none",
//         company:"none",
//         location:"none",
//         email:"none",
//         blog:"none"
//          }
 
  
//  const SearchReducer = (state = initialSearchState, action)=> {
  
//     if(action.type==='Srch_Rqst') {
//       return action.data;
//       }
//       return state;
//   }

     const initialTabsState = {
       BasicTab:'11',
       EducationTab:'2324',
       ContactsTab:'',
       FollowersTab:'',
       ReposTab:'',
       OrgsTab:'',
       User:{avatar_url:"", name:"none",login:"none",bio:"none",company:"none",location:"none",email:"none",blog:"none"}
   
}
  
 const TabsReducer = function(state = initialTabsState, action) {
       if(action.type==='ChangeTabData') {
        console.log("what");
       return Object.assign({},state,action.data);
       
       }
    return state;
  }
// const initialFolloversState=["empty"];

//  const FollowersReducer= (state = initialFolloversState, action)=> {
//   let newlistfollowers=state;
//   if(action.type==='Follow_Rqst') {
    
      
     
//       return action.data.map(item=>{
//         return item['login'];
//         });
//     }   
//   return state; 
// }

  // export default combineReducers({
  //   SearchReducer,
  //    TabsReducer,
  //     });
      export default TabsReducer;
