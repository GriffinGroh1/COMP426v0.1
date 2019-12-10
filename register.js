//import {setToken} from "../../config/Token";
//import getAxiosInstance from "../../config/Axios";
//window.location.href = "login/mainpage.html";



$(function() {
    handleEvents();
});

function handleEvents() {
    $(document).on('click', '#makeAcc', makeAccount)
    
    //$('#login').on("click", ".cancel", handleCancel);
}

async function makeAccount(e) {
    e.preventDefault();
    alert("Button clicked")
    let username = (e.currentTarget.parentNode.childNodes[1].value)
    let password = (e.currentTarget.parentNode.childNodes[3].value)
    //alert(username);
    //alert(password);
    //const name = $('#usernameField').value;
    //const username = $('#username').val();
    //const pass = $('#pass').val();
    //console.log(name);
    //console.log(username);
    //console.log(pass);
    //todo: add indication that account trying to be made has already been registered?
        const result = await axios({
             method: 'POST',
             url: 'http://localhost:3000/account/create',
             data: {
                 "name": username,
                 "pass": password,
                
             }
         });
        console.log("success")
        window.location.href = "/index.html";
    

}
