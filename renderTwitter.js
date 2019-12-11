

$(function() {
    //loadPage();
    $(document).on("click", "#submitBtn", buttonClick);
});

export async function buttonClick() {
    //alert("Clicked");
    let tok = (localStorage.getItem('jwt'));
    console.log(tok)
    //alert(tok)
    //let inputString = (document.getElementById('inputField').value)

    let authHeader = 'Bearer ' + tok.jwt;

    const result = await axios({
      method: 'get',
      url: 'http://localhost:3000/account/status',
      headers: {Authorization: 'Bearer ' + tok},
      
  });
}
