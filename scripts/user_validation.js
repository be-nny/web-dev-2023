document.querySelector('#uname_input').addEventListener('input', validate);

const re = new RegExp(/[\\"!@#%&*()+=^{}\[\]—;:'<>?\/]/gmi);

function validate(){
    let text = document.getElementById('uname_input').value
    console.log(text);
    if(text.length > 0 && re.test(text) == false && text.includes(" ") == false){
        document.getElementById("register_submit").disabled = false;
        document.getElementById("valid_label").innerText = "Valid";
        document.getElementById("valid_label").style.color = 'green';
    } else{
        document.getElementById("register_submit").disabled = true;
        document.getElementById("valid_label").innerText = "Invalid";
        document.getElementById("valid_label").style.color = 'red';
    }
}