const getCookie = (cookie_name) =>{
    // Construct a RegExp object as to include the variable name
    const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
    try{
        return document.cookie.match(re)[0];	// Will raise TypeError if cookie is not found
    }catch{
        return null;
    }
}

if(getCookie('uname') !== null){
    document.getElementById("user_login").innerHTML = "Hello, " + getCookie('uname');
} else{
    document.getElementById("user_login").innerHTML = "Not signed in";
}