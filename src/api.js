function api(url) {
        return fetch(url)
            .then((response => {
                if(response.status >= 200 && response.status < 400){
                    return response.json();
                }
                else if (response.status === 404){
                    alert("Error! User not found.");
                }
                else {
                    alert("Error! Please try again.");
                }
            }))
    }
    
    function request(login) {
        let url = login;
        return api(url);
    }

    export default request;

    