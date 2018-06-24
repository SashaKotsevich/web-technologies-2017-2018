
import {combineReducers} from 'redux';

const initialSearchState = {
        avatar_url:"",
        name:"none",
        login:"none",
        bio:"none",
        company:"none",
        location:"none",
        email:"none",
        blog:"none"
       
  }
 
  
 const SearchReducer = (state = initialSearchState, action)=> {
  
    if(action.type==='Srch_Rqst') {
      return action.data;
      }
      return state;
  }

     const initialTabsState = {
    first_tab:"",
    second_tab:"",
    third_tab:"",
    currenttab:"first_tab"
}
  
 const TabsReducer = function(state = initialTabsState, action) {
   
    if(action.type==='ChangeTaCt') {
       let newstate=state;
       newstate[action.ct]=action.txt;
       newstate.currenttab=action.ct;
       return   newstate;
       }
       return state;
  }

  export default combineReducers({
    SearchReducer,
     TabsReducer
  });