const re = new RegExp(/[\\"!@#%&*()+=^{}\[\]—;:'<>?\/\s]/gmi);
document.querySelector('#uname_input').addEventListener('input', validate);

function validate(){
    let text = document.getElementById('uname_input').value
    if(text.length > 0 && re.test(text) == false){
        document.getElementById("register_submit").disabled = false;
        document.getElementById("valid_label").innerText = "Valid";
    } else{
        document.getElementById("register_submit").disabled = true;
        document.getElementById("valid_label").innerText = "Invalid";
    }
}