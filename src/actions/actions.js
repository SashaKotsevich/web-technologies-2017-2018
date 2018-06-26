export const changeuseraction= (link) =>{
    return({type:"ChangeUser", link:link});
}
export const changereposaction= (link) =>{
    return({type:"ChangeRepos", link:link})
}
export const changefollowsaction= (link) =>{
    return({type:"ChangeFollows", link:link})
}
export const changeorgsaction= (link) =>{
    return({type:"ChangeOrgs", link:link})
}
export const changetabaction= (data) =>{
    return({type:"ChangeTabData", data:data})
}
export const changetoppopularaction= (link) =>{
    return({type:"ChangeTopPopular", link:link})

}
export const changetopgrowingaction =(link) =>{
    return({type:"ChangeTopGrowing", link:link})

}