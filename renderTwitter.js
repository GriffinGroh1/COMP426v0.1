

$(function() {
    //loadPage();
    render();
    $(document).on("click", "#submitBtn", buttonClick);
});
export async function render() {
  let tok = localStorage.getItem('jwt')
  const res = await axios({
    method: 'get',
    url: 'http://localhost:3000/private',
    headers: {Authorization: 'Bearer ' + tok},
  })
  console.log(res.data.result)
  console.log(res.data.result[0])
  let arr = res.data.result;
  const $root = $('#root');
  for (let i = arr.length-1; i >= 30 ; i--) {
    $root.append('<div class="hero"><p><span style="font-weight: bold; color: gold">&nbsp;&nbsp;@FootballGuy'+(i-29)+':</span></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + arr[i] + '</p></div>')
  }
}
export async function buttonClick() {
    //alert("Clicked");
    let tok = (localStorage.getItem('jwt'));
    console.log(tok)
    //alert(tok)
    //let inputString = (document.getElementById('inputField').value)

    let authHeader = 'Bearer ' + tok.jwt;
    //alert(document.getElementById('inputField').value)
    let stringPost = document.getElementById('inputfield').value
    //alert(stringPost)
    const result = await axios({
      method: 'post',
      url: 'http://localhost:3000/private/' + stringPost,
      headers: {Authorization: 'Bearer ' + tok},
      "type": "merge",
      'data': {
        'data': {
          [stringPost]: stringPost
        }
        
      }
  });
}
